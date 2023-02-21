
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface UpdateBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: number): Book | Promise<Book>;
}

export interface IMutation {
    deletebook(bookId: number): string | Promise<string>;
    addbook(addBookArgs: AddBookArgs): string | Promise<string>;
    updatebook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
