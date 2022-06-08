import { IsDate, IsOptional, IsUUID } from "class-validator";

// valida que la info que entra en cada entidad cumpla con las condiciones de esta clase
export abstract class BaseDTO { // BaseDTO no se puede instanciar porque es una clase abstracta

    @IsUUID()
    @IsOptional()
    id!: string;

    @IsDate()
    @IsOptional()
    createdAt!: Date;
    
    @IsDate()
    @IsOptional()
    updatedAt!: Date;
}