import * as dotenv from 'dotenv';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export abstract class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv
        })
    }

    public getEnvironment(k: string): string | undefined {
        return process.env[k]
        // process.env[PORT]
    }

    public getNumberEnv(k: string): number {
        return Number(this.getEnvironment(k))
    }

    public get nodeEnv(): string {
        return this.getEnvironment("NODE_ENV")?.trim() || "";
    }

    public createPathEnv(path: string): string {
        const arrEnv: Array<string> = ["env"]; //['hola', 'mundo'] => 'hola.mundo'
    
        if (path.length > 0) {
          const stringToArray = path.split(".");
          arrEnv.unshift(...stringToArray);
        }
        return "." + arrEnv.join(".");
      }

    //! Deprecated in the new version of TypeORM use DataSourceOptions
    public get typeORMConfig(): ConnectionOptions {
        return {
            type: 'mysql',
            host: this.getEnvironment('DB_HOST'),
            port: this.getNumberEnv('DB_PORT'),
            username: this.getEnvironment('DB_USER'),
            password: this.getEnvironment('DB_PASSWORD'),
            database: this.getEnvironment('DB_DATABASE'),
            //de esta forma podemos leer y setear el valor de la variable de entorno

            entities: [__dirname + '/../**/*.entity{.ts,.js}'], // vuelvo al directorio src para que busque en todo el proyecto(**) los archivos con cualquier nombre(*) pero con extension .entity.ts o .entity.js
            migrations: [__dirname + '/../../migrations/*{.ts,.js}'], // vuelvo a la raiz y leo adentro de migrations todos los archivos con cualquier nombre(*) pero con extension .ts o .js
            synchronize: true,  // sincroniza la base de datos con los cambios que se hagan en las entidades y las actualiza
            logging: false, // no muestra los errores en consola
            namingStrategy: new SnakeNamingStrategy(), 
            // nombre de las tablas en (snake_case)          
        }
    }

    //! Deprecated in the new version of TypeORM
    async dbConnect(): Promise<Connection> {
        return await createConnection(this.typeORMConfig)
    }  
}