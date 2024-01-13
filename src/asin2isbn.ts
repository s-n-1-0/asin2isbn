import { ConvertIsbnResponse, IsbnError } from "./interfaces";
import { convertIsbn } from "./isbn2";

export function convertAsin2Isbn(asin: string): ConvertIsbnResponse {
  let error: IsbnError = "";
  if (asin[0] == "B") error = "KINDLE";
  if (asin.length != 10) error = "FORMAT";
  if (error != "")
    return {
      isbn10: "",
      isbn13: "",
      error,
    };
  let isbn = convertIsbn(asin);
  return {
    ...isbn,
    error: isbn == null ? "FORMAT" : "",
  };
}
