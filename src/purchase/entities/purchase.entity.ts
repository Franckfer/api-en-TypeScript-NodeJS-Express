// creamos la tabla purchases y definimos los campos que tendra la tabla
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { PurchaseProductEntity } from "../../pivot/entities/purchases-products.entity";


@Entity({name: 'purchase'})
export class PurchaseEntity extends BaseEntity { // vamos a intanciar la clase PurchaseEntity que hereda las propiedades de BaseEntity

    @Column() // al estar vacio, por defecto, reconoce el nombre de la columna, su tipo de dato y que no puede ser nulo
    status!: string; // con el signo de exclamacion obligo a typescript que confie en que el tipo de dato sera de ese valor aunque no este asignado en el constructor para evitar errores
    
    @Column() 
    paymentMethod!: string;
    
    //? relacion muchos a uno con la tabla customer, donde muchos purchases pueden tener un solo customer
    @ManyToOne( () => CustomerEntity, (customer) => customer.purchases ) // usamos el decorador ManyToOne para indicar la relacion de muchos a uno 
    @JoinColumn({ name: 'customer_id' }) // indicamos el nombre de la columna que se relaciona con el id del customer
    customer!: CustomerEntity;

    //? relacion uno a muchos con la tabla pivot purchases-products, donde una compra esta relacionada a muchos productos 
    @OneToMany( () => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.purchase )
    purchaseProduct!: PurchaseProductEntity[];
    
}