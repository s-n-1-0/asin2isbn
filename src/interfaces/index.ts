export interface ConvertIsbnResponse {
  error: "FORMAT" | "KINDLE" | "";
  isbn: string;
}
