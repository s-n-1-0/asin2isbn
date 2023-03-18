import {
  convertAsin2Isbn13,
  convertIsbn,
  convertIsbn2Url,
  convertUrl2Asin,
  convertUrl2Isbn13,
} from "../src/";

/**
 * convertAsin2Isbn13 tests
 */
test("convertAsin2Isbn13 : paper asin", () => {
  let res = convertAsin2Isbn13("4596708460");
  expect(res).toEqual({
    error: "",
    isbn: "9784596708465",
  });

  let res2 = convertAsin2Isbn13("4799215663");
  expect(res2).toEqual({
    error: "",
    isbn: "9784799215661",
  });
});

test("convertAsin2Isbn13 : kindle asin", () => {
  expect(convertAsin2Isbn13("B09MYHB3X3")).toEqual({
    error: "KINDLE",
    isbn: "",
  });
});

/**
 * url2* tests
 */
test("convertUrl2Asin : paper", () => {
  expect(
    convertUrl2Asin(
      "https://www.amazon.co.jp/dp/4799215663/ref=cm_sw_r_tw_dp_5XW9TEXBPTC54CE90CE9"
    )
  ).toBe("4799215663");
});

test("convertUrl2Isbn13 : paper", () => {
  expect(
    convertUrl2Isbn13(
      "https://www.amazon.co.jp/dp/4799215663/ref=cm_sw_r_tw_dp_5XW9TEXBPTC54CE90CE9"
    )
  ).toEqual({
    error: "",
    isbn: "9784799215661",
  });
});

//URL Error Case
test("convertUrl2Isbn13 : url error", () => {
  expect(convertUrl2Isbn13("urlerror")).toEqual({
    error: "FORMAT",
    isbn: "",
  });
});

/** isbn to amazon url*/
test("convertIsbn2Url", () => {
  expect(convertIsbn2Url("9784799215661")).toBe(
    "https://www.amazon.co.jp/dp/4799215663"
  );
});
/* between isbn */
test("convertIsbn", () => {
  //10=>13
  expect(convertIsbn("4799215663")).toEqual({
    isbn13: "9784799215661",
    isbn10: "4799215663",
  });
  //13=>10
  expect(convertIsbn("9784040645322")).toEqual({
    isbn13: "9784040645322",
    isbn10: "4040645324",
  });

  //13=>10 (cd 10 case)
  expect(convertIsbn("9784309226712")).toEqual({
    isbn13: "9784309226712",
    isbn10: "430922671X",
  });
  //13=>10 (cd 11 case)
  expect(convertIsbn("9784534059628")).toEqual({
    isbn13: "9784534059628",
    isbn10: "4534059620",
  });
});
