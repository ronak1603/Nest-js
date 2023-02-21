import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getMongoRepository, Repository } from "typeorm";
import { AddBookArgs } from "./args/addbook.args";
import { UpdateBookArgs } from "./args/updatebook.args";
import { BookEntity } from "./book.entity";

@Injectable()
export class BookService {

    constructor(@InjectRepository(BookEntity) private readonly bookRepo: Repository<BookEntity>) { }


    async addBook(addBookArgs: AddBookArgs): Promise<string> {

        await getMongoRepository(BookEntity).insertOne({

            id:addBookArgs.id,

            title: addBookArgs.title,

            price: addBookArgs.price,

        })

        return "Book has been added";
    }

    async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {

        await getMongoRepository(BookEntity).updateOne(
            { id: updateBookArgs.id },
            {
                $set: {
                    title: updateBookArgs.title,

                    price: updateBookArgs.price,
                }
            },
        )

        return "Book has been updated";
    }

    async findAllBooks(): Promise<BookEntity[]> {
        let books = await this.bookRepo.find();
        console.log(books);
        return books;
    }

    async findBookById(id: number): Promise<BookEntity> {
        let book = await this.bookRepo.findOne({ where: { id: id } });
        return book;
    }

    async deleteBookById(id: number): Promise<string> {
        await this.bookRepo.delete(id);
        return "book successfully deleted.";
    }


}