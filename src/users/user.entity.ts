import { Entity,Column,PrimaryGeneratedColumn, ObjectID} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:ObjectID

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string
}