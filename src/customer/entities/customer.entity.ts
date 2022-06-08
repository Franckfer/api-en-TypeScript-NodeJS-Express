//creamos la tabla customers y definimos los campos que tendra la tabla y sus relaciones
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { UserEntity } from "../../user/entities/user.entity";


@Entity({name: 'customer'})
export class CustomerEntity extends BaseEntity { // vamos a intanciar la clase CustomerEntity que hereda las propiedades de BaseEntity

    @Column() // al estar vacio, por defecto reconoce el nombre, el tipo de dato y que no puede ser nulo
    address!: string; // con el signo de exclamacion obligo a typescript que confie en que el tipo de dato sera de ese valor para evitar errores

    @Column()
    dni!: number;

    //? relacion uno a uno con la tabla user, donde customer puede tener un solo usuario
    @OneToOne( () => UserEntity, (user) => user.customer ) // usamos el decorador OneToOne para indicar la relacion de uno a uno
    @JoinColumn({ name: 'user_id' }) // con el decorador JoinColumn indicamos con que campo se relacionara la tabla
    user!: UserEntity; 

    //? relacion uno a muchos con la tabla purchases, donde customer puede tener muchas purchases
    @OneToMany( () => PurchaseEntity, (purchase) => purchase.customer ) // usamos el decorador OneToMany para indicar la relacion de uno a muchos con la tabla purchases
    purchases!: PurchaseEntity[]; // PurchaseEntity queda en forma de array por que con esto sabemos que puede haber varios purchases asociados a un customer
}