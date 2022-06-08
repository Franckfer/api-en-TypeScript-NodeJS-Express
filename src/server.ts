import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');
 
  // creamos la funcion constructora que sirve para levantar el servidor
  constructor() {
    super()
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    
    this.dbConnect().catch(error => console.log(error))  
      
    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  //Creo la funcion que me permite conectarse a la base de datos
  // async dbConnect(): Promise<DataSource> {
  //   return await new DataSource(this.typeORMConfig).initialize()
  // }
  
  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port => " + this.port);
    });
  }
}

new ServerBootstrap();