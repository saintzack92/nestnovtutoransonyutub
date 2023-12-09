import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable:false,
    default:''
  })
  username: string;

  @Column({
    nullable: true,
    default: '',
  })
  email:string

  @Column({
    default:'',
    nullable:false
  })
  password: string;
}
