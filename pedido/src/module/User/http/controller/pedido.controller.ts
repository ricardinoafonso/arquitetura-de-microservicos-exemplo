import { Request, Response } from "express";
import { PedidoService } from "../../service/pedido.service";

export class pedidoController {
 async execute(req: Request, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const pedidoService = new PedidoService()
    const result = await pedidoService.execute(req.body)
    return res.status(201).json(result);
  }

  async updateOrderStatus (req: Request, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const pedidoService = new PedidoService()
    const result = await pedidoService.updateOrderStatus(req.body)
    return res.status(201).json(result);
  }
}
