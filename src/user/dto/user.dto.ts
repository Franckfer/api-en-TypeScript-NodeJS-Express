import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

//valida la informacion que reciba la entidad User
export class UserDTO extends BaseDTO {

    @IsNotEmpty()
    lastname!: string;

    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    password!: string;

    @IsNotEmpty()
    city!: string;

    @IsNotEmpty()
    province!: string;
}
    