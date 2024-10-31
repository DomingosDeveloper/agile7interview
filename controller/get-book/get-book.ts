import { IGetBookController, IGetBookRepository } from "./protocols";
 
export class GetBookController implements IGetBookController {
    constructor(private readonly getBooksRepository: IGetBookRepository){}
    
    async handle(){
        try{
             const books = await this.getBooksRepository.getBooks() ;
            
             return {
                statusCode: 200,
                body: books,
             };
        } catch (error){
            return {
                statusCode: 500,
                body: 'Something went wrong.'
            };
        }
    };
};