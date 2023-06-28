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
exports.ListProductController = void 0;
const ListProductService_1 = require("../../services/product/ListProductService");
class ListProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category_id = req.query.category_id;
            //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
            const listCategoryService = new ListProductService_1.ListProductService();
            const list_product = yield listCategoryService.execute({
                category_id
            });
            //RETORNA PARA O USUARIO
            //O BANCO JA FOI CADASTRADO
            return res.json(list_product);
        });
    }
}
exports.ListProductController = ListProductController;
