import { convertAsin2Isbn13, convertUrl2Isbn13 } from "../src";

let res = convertAsin2Isbn13("4596708460");
if (res.isbn != "") {
  console.log("ISBN : " + res.isbn);
}

let res2 = convertAsin2Isbn13("B09MYHB3X3");
console.log(res2.error); // => "KINDLE"

let res3 = convertUrl2Isbn13(
  "https://www.amazon.co.jp/dp/4799215663/ref=cm_sw_r_tw_dp_5XW9TEXBPTC54CE90CE9"
);
if (res3.isbn != "") console.log("res3 ISBN : " + res3.isbn);
