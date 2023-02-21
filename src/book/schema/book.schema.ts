import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { ObjectID } from "typeorm";

@ObjectType()
export class Book{

    @Field()
    id:number;

    @Field()
    title:string;

    @Field((type)=>Int)
    price:number;

}