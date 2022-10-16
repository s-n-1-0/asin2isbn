import {
  convertAsin2Isbn13,
  convertUrl2Asin,
  convertUrl2Isbn13,
} from "../src/";

function checkConvertAsin2Isbn13(name: string, asin: string, ans: string) {
  let res = convertAsin2Isbn13(asin);
  console.log(`convertAsin2Isbn13 ${name} : ${asin} -> ${ans}
 : ${ans == res.isbn}`);
  if (ans != res.isbn) console.log("error => " + res.error);
}
checkConvertAsin2Isbn13("test1", "4596708460", "9784596708465");
checkConvertAsin2Isbn13("test2", "4799215663", "9784799215661");
checkConvertAsin2Isbn13("test3-kindle", "B09MYHB3X3", "ERR_KINDLE");
//---
function checkConvertUrl2Asin(name: string, url: string, ans: string) {
  let asin = convertUrl2Asin(url);
  console.log(`convertUrl2Asin ${name} : ${url} -> ${ans}
 : ${ans == asin}`);
  if (ans != asin) console.log("error => " + asin);
}
checkConvertUrl2Asin(
  "test-url",
  "https://www.amazon.co.jp/dp/4799215663/ref=cm_sw_r_tw_dp_5XW9TEXBPTC54CE90CE9",
  "4799215663"
);

console.log(
  convertUrl2Isbn13(
    "https://www.amazon.co.jp/dp/4799215663/ref=cm_sw_r_tw_dp_5XW9TEXBPTC54CE90CE9"
  )
);
console.log(convertUrl2Isbn13("urlerror"));
console.log("end");
