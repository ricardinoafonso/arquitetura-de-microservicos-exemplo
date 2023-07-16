import { Request, Response } from "express";
import { ProdutoService } from "../../service/produto.service";

export class produtoController {
  async execute(
    req: Request,
    res: Response<any, Record<string, any>>
  ): Promise<Response<any, Record<string, any>>> {
    const produtoService = new ProdutoService();
    const result = await produtoService.execute(req.body);
    return res.status(201).json({ result });
  }
}
