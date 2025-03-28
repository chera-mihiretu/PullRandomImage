import Router from 'express';
import {postHandler, getHandler} from '../controller/index';

const telegramRouter = Router();

telegramRouter.post("/myphoto", postHandler)
telegramRouter.get("/myphoto", getHandler)
telegramRouter.get("/myphoto/like", (req, res) => {
    console.log(req)
    res.send({ok: true})
})



export default telegramRouter;