import { Book } from "../../models/book";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IUpdateBookRepository {
    updateBook(id: string, params: UpdateBookParams): Promise<Book>;
}

export interface IUpdateBookController {
    updateBook(httpRequest : HttpRequest<any>): Promise<HttpResponse<Book>>;
}

export interface UpdateBookParams{
    quantity: string;
}