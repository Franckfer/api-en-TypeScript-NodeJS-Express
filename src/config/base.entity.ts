//? CONFIGURACION BASE DE ENTIDADES

import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";

export abstract class BaseEntity { // BaseEntity no se puede instanciar porque es una clase abstracta

    @PrimaryGeneratedColumn('uuid')
    id!: string;  // con el signo de exclamacion obligo a typescript que confie en que el tipo de dato sera de ese valor para evitar errores

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp'
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp'
    })
    updatedAt!: Date;
}