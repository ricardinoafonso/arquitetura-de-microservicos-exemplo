import { Router } from "express";
import { pedidoController } from "../http/controller/pedido.controller";
const pedidoRouter = Router()

pedidoRouter.post('/', new pedidoController().execute)
pedidoRouter.patch('/', new pedidoController().updateOrderStatus)

export default pedidoRouter