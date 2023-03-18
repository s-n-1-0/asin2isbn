import { convertIsbn } from "./isbn";

/**
 * ISBN10-> ASIN or ISBN13->ASIN
 */
export function convertIsbn2Asin(isbn: string) {
  if (isbn.length == 10) return isbn; //ISBN10 == ASIN
  if (isbn.length == 13) return convertIsbn(isbn).isbn10;
  return null;
}
/**
 * ISBN10 -> Amazon URL or ISBN13 -> AmazonURL
 */
export function convertIsbn2Url(isbn: string) {
  let asin = convertIsbn2Asin(isbn);
  if (!asin) return null;
  return "https://www.amazon.co.jp/dp/" + encodeURI(asin);
}
