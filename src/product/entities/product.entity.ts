import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseProductEntity } from "../../pivot/entities/purchases-products.entity";


@Entity({ name: 'product'})
export class ProductEntity extends BaseEntity {

    @Column() // al estar vacio, por defecto reconoce el nombre de la columna, el tipo de dato y que no puede ser nulo
    productName!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    //? relacion muchos a uno con la tabla category, donde los productos tienen una sola categoria
    @ManyToOne( () => CategoryEntity, (category) => category.products )
    @JoinColumn({ name: 'category_id' })
    category!: CategoryEntity;

    //? relacion uno a muchos con la tabla pivot purchases-products, donde un producto esta relacionado a muchas compras
    @OneToMany( () => PurchaseProductEntity, (purchaseProduct) => purchaseProduct.product )
    purchaseProduct!: PurchaseProductEntity[];

}