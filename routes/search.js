import express from 'express';
import { searchController } from '../controller/searchController.js';
import { isLogin } from '../middleware/islogin.js';


const searchRouter = express.Router();

searchRouter.get('/',isLogin, searchController);

export default searchRouter;