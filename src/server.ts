import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./routes/user.router";
import { ConfigServer } from "./config/config";
import { Connection, createConnection, DataSource } from "typeorm";

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

    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  //! Deprecated in the new version of TypeORM
  // async dbConnect(): Promise<Connection> {
  //   return await createConnection(this.typeORMConfig)
  // }  

  async dbConnect(): Promise<DataSource> {
    return await new DataSource(this.typeORMConfig).initialize()
  }
  
  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port => " + this.port);
    });
  }
}

new ServerBootstrap();