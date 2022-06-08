import { BaseRouter } from "../shared/routes/router";
import { UserController } from "./controllers/user.controller";

export class UserRouter extends BaseRouter<UserController> {  // UserRouter hereda las propiedades de BaseRouter y ademas tiene su propio constructor que recibe una instancia de UserController
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
    this.router.get("/user/:id", (req, res) => this.controller.getUserById(req, res));
    this.router.post("/createUser", (req, res) => this.controller.createUser(req, res));
    this.router.put("/updateUser/:id", (req, res) => this.controller.updateUser(req, res));
    this.router.delete("/deleteUser/:id", (req, res) => this.controller.deleteUser(req, res));
  }
}