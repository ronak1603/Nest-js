import { Entity,Column,PrimaryGeneratedColumn, ObjectID} from "typeorm";

@Entity()
export class BookEntity{
    @PrimaryGeneratedColumn('increment')
    
    id:number;

    @Column()
    title:string;

    @Column()
    price:number;
}