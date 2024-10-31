import { GetBookParams, IGetBookRepository } from "../../controller/get-book/protocols";
import { UpdateBookParams } from "../../controller/update-book/protocol";
import { MongoClient } from "../../database/mongo";
import { Book } from "../../models/book";

export class MongoGetBooksRepository implements IGetBookRepository {

    async getAllBooks(): Promise<Book[]> {
      const books = await MongoClient.db
          .collection<Omit<Book, "id">>("books")
          .find({})
          .toArray();

      return books.map(({ _id, ...rest}) => ({
        ...rest, 
        id: _id.toHexString(),
      }));
    }     
}