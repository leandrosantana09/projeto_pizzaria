"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
// IMPORTS USER
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
// IMPORTS CATEGORY
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
// IMPORTS PRODUCT
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListProductController_1 = require("./controllers/product/ListProductController");
// IMPORTS ITEM
const RemoveItemController_1 = require("./controllers/item/RemoveItemController");
const CreateItemController_1 = require("./controllers/item/CreateItemController");
// IMPORTS ORDER
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload('./tmp'));
// ROTAS USERS
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// ROTAS CATEGORIA
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// ROTAS PRODUCT
router.post('/product', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListProductController_1.ListProductController().handle);
// ROTAS ORDER
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post('/order/add', isAuthenticated_1.isAuthenticated, new CreateItemController_1.CreateItemController().handle);
router.delete('/order/add', isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.put('/order/details', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
