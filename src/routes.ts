import {Router} from 'express';
import multer from 'multer';

// IMPORTS USER
import {CreateUserController} from './controllers/user/CreateUserController';
import {AuthUserController} from './controllers/user/AuthUserController';
import {DetailUserController} from './controllers/user/DetailUserController';

// IMPORTS CATEGORY
import {CreateCategoryController} from './controllers/category/CreateCategoryController';
import {ListCategoryController}from './controllers/category/ListCategoryController'

// IMPORTS PRODUCT
import {CreateProductController} from './controllers/product/CreateProductController';
import {ListProductController} from './controllers/product/ListProductController'

// IMPORTS ITEM
import {RemoveItemController } from './controllers/item/RemoveItemController';
import {CreateItemController} from './controllers/item/CreateItemController';

// IMPORTS ORDER
import {SendOrderController} from './controllers/order/SendOrderController';
import {CreateOrderController} from './controllers/order/CreateOrderController';
import {RemoveOrderController } from './controllers/order/RemoveOrderController';
import {FinishOrderController } from './controllers/order/FinishOrderController';
import {DetailOrderController } from './controllers/order/DetailOrderController';

import {isAuthenticated} from './middlewares/isAuthenticated';

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'))

// ROTAS USERS
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)


// ROTAS CATEGORIA
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

// ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListProductController().handle)


// ROTAS ORDER

router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new CreateItemController().handle)

router.delete('/order/add', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.put('/order/details', isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export {router};