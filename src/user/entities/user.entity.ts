// creamos la tabla users y definimos los campos que tendra la tabla
import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity({name: 'users'})
export class UserEntity extends BaseEntity { // vamos a intanciar la clase UserEntity que hereda las propiedades de BaseEntity
    
    @Column() // al estar vacio, por defecto reconoce el nombre, el tipo de dato y que no puede ser nulo
    name!: string; // con el signo de exclamacion obligo a typescript que confie en que el tipo de dato sera de ese valor para evitar errores
    
    @Column()
    lastname!: string;

    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column() 
    password!: string;

    @Column()
    city!: string;

    @Column()
    province!: string;

    @OneToOne( () => CustomerEntity, (customer) => customer.user ) // usamos el decorador OneToOne para indicar la relacion de uno a uno
    customer!: CustomerEntity;

}