import {Router} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import {ListCategoryController} from './controllers/category/ListCategoryController'


import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// ROTAS USERS
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)


// ROTAS CATEGORIA
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

export {router};