import { Router } from "express";
import { produtoController } from "../http/controller/produto.controller";
const produtoRouter = Router()

produtoRouter.post('/', new produtoController().execute)


export default produtoRouter