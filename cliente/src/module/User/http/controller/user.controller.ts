import { Request, Response } from "express";
import { userService } from "../../service/user.service";

export class userController {
  async execute(
    req: Request,
    res: Response<any, Record<string, any>>
  ): Promise<Response<any, Record<string, any>>> {
    const UserService = new userService();
    const result = await UserService.execute(req.body);
    return res.status(201).json({ result });
  }
}
