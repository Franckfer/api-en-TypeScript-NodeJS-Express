"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const config_1 = require("./config");
// con esta clase podemos ejecutar e inicializar el repositorio para poder utilizar los metodos de la base de datos como create, update, delete, find, findOne, etc
// BaseService hereda los metodos de ConfigServer y a la vez este componente lo hacemos generico para que pueda ser utilizado por cualquier entidad(tabla)
class BaseService extends config_1.ConfigServer {
    constructor(getEntity) {
        super();
        this.getEntity = getEntity;
        this.execRepository = this.initRepository(getEntity);
    }
    initRepository(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const getConn = yield this.dbConnect(); // utilizamos el metodo de la clase ConfigServer para conectarnos a la base de datos
            return getConn.getRepository(entity);
        });
    }
}
exports.BaseService = BaseService;
