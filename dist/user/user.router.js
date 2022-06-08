"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const router_1 = require("../shared/routes/router");
const user_controller_1 = require("./controllers/user.controller");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
        this.router.get("/user/:id", (req, res) => this.controller.getUserById(req, res));
        this.router.post("/createUser", (req, res) => this.controller.createUser(req, res));
        this.router.put("/updateUser/:id", (req, res) => this.controller.updateUser(req, res));
        this.router.delete("/deleteUser/:id", (req, res) => this.controller.deleteUser(req, res));
    }
}
exports.UserRouter = UserRouter;
