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
exports.CreateItemController = void 0;
const CreateItemService_1 = require("../../services/item/CreateItemService");
class CreateItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //CRIAR VARIAVEIS COM AS INFOS RECEBIDAS
            const { order_id, product_id, amount } = req.body;
            //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
            const createItemService = new CreateItemService_1.CreateItemService();
            const item = yield createItemService.execute({
                order_id,
                product_id,
                amount
            });
            //RETORNA PARA O USUARIO
            //O BANCO JA FOI CADASTRADO
            return res.json(item);
        });
    }
}
exports.CreateItemController = CreateItemController;
