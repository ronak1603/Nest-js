import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AddBookArgs } from "./args/addbook.args";
import { UpdateBookArgs } from "./args/updatebook.args";
import { BookService } from "./book.service";
import { Book } from "./schema/book.schema";

@Resolver(()=>Book)
export class BookResolver{

    constructor(private readonly bookService:BookService){}

    @Query(returns => [Book], {name:'books'})
    getAllBooks(){
        return this.bookService.findAllBooks();
    }

    @Query(returns => Book, {name:'bookById'})
    getBookById(@Args({name:'bookId', type: () => Int}) id:number){
        return this.bookService.findBookById(id);
    }

    @Mutation(returns => String, {name:'deletebook'})
    deleteBookById(@Args({name:'bookId', type: () => Int}) id:number){
        return this.bookService.deleteBookById(id);
    }

    @Mutation(returns => String, {name:'addbook'})
    addBook(@Args("addBookArgs") addBookArgs:AddBookArgs){
        return this.bookService.addBook(addBookArgs);
    }

    @Mutation(returns => String, {name:'updatebook'})
    updateBook(@Args("updateBookArgs") updateBookArgs:UpdateBookArgs){
        return this.bookService.updateBook(updateBookArgs);
    }

}