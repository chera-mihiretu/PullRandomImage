import Router from 'express';
import {postHandler, getHandler} from '../controller/index';

const telegramRouter = Router();

telegramRouter.post("/myphoto", postHandler)
telegramRouter.get("/myphoto", getHandler)



export default telegramRouter;