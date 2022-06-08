import { EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

// con esta clase podemos ejecutar e inicializar el repositorio para poder utilizar los metodos de la base de datos como create, update, delete, find, findOne, etc

// BaseService hereda los metodos de ConfigServer y a la vez este componente lo hacemos generico para que pueda ser utilizado por cualquier entidad(tabla)
export class BaseService<T extends BaseEntity> extends ConfigServer { 
    public execRepository: Promise<Repository<T>>
    constructor( private getEntity: EntityTarget<T>) {
        super();
        this.execRepository = this.initRepository(getEntity);
    }

    async initRepository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {  // <T> recibe un tipo de dato generico 
        const getConn = await this.dbConnect(); // utilizamos el metodo de la clase ConfigServer para conectarnos a la base de datos
        return getConn.getRepository(entity);
    }
}