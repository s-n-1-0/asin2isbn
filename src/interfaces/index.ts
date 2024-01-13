export interface Isbn {
  isbn10: string;
  isbn13: string;
}
export type IsbnError = "FORMAT" | "KINDLE" | "";
export interface ConvertIsbnResponse extends Isbn {
  error: IsbnError;
}
