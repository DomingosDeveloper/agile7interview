import { Book } from "../../models/book";
import { HttpResponse } from "../protocols";

export interface IGetBookController{
    handle(): Promise<HttpResponse<[Book]>>;
}

export interface IGetBookRepository{
    getBooks(): Promise <[Book]>;
}