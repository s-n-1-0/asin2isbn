import { ConvertIsbnResponse } from "./interfaces";
import { convertIsbn } from "./isbn2";

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
  let isbn = convertIsbn(asin);
  return {
    isbn: isbn ?? "",
    error: isbn == null ? "FORMAT" : "",
  };
}
