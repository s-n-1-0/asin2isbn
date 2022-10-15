# asin2isbn

asin to isbn

## Installation

```
npm install asin2isbn
```

## Import

```ts
import {
  convertAsin2Isbn13,
  convertUrl2Asin,
  convertUrl2Isbn13,
} from "asin2isbn";
```

## ASIN to ISBN

```ts
let res = convertAsin2Isbn13("4596708460");
if (res.error != "") {
  console.log("ISBN : " + res.isbn);
}
```

※Only paper books are available

### For Kindle ASIN?

```ts
let res2 = convertAsin2Isbn13("B09MYHB3X3");
console.log(res2.error); // => "KINDLE"
```

## Amazon URL to ISBN

```ts
let res3 = convertUrl2Isbn13(
  "https://www.amazon.co.jp/dp/4799215663/ref=cm_sw_r_tw_dp_5XW9TEXBPTC54CE90CE9"
);
if (res3.isbn != "") console.log("res3 ISBN : " + res3.isbn);
```

## Others

### URL to ASIN

```ts
convertUrl2Asin("https://....");
```

## PR / Issues

Please PR or Issues if you have any questions.
