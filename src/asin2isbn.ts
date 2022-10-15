import { ConvertIsbnResponse } from "./interfaces";
export function getIsbn13Checkdigit(isbn: string) {
  if (isbn.length < 12 || isbn.length > 13) return null;
  let isbn12 = isbn;
  if (isbn12.length == 13) {
    isbn12 = isbn12.slice(0, -1);
  }
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < isbn12.length; i += 2) {
    p1 += Number(isbn12[i]);
  }
  for (let i = 1; i < isbn12.length; i += 2) {
    p2 += Number(isbn12[i]);
  }

  let d = (p1 + p2 * 3) % 10;
  d = 10 - d;
  if (d == 10) d = 0;
  return {
    isbn: isbn12 + String(d),
    checkdigit: d,
  };
}

export function convertAsin2Isbn13(asin: string): ConvertIsbnResponse {
  if (asin[0] == "B")
    return {
      isbn: "",
      error: "KINDLE",
    };
  if (asin.length != 10)
    return {
      isbn: "",
      error: "FORMAT",
    };
  let q = "978" + asin;
  let isbn = getIsbn13Checkdigit(q)?.isbn;
  return {
    isbn: isbn ?? "",
    error: isbn == null ? "FORMAT" : "",
  };
}
