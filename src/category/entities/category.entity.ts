import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({ name: 'category'})
export class CategoryEntity extends BaseEntity {

    @Column() // al estar vacio, por defecto reconoce el nombre de la columna, el tipo de dato y que no puede ser nulo
    categoryName!: string;

    //? relacion uno a muchos con la tabla category, donde una categoria puede tener muchos productos
    @OneToMany( () => ProductEntity, (product) => product.category )
    products!: ProductEntity[];

}