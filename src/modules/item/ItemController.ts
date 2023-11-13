import { Request, Response } from "express";
import { GetItemUseCase } from "./useCases/GetItemUseCase";

export class ItemController {

    private getItemUseCase = new GetItemUseCase()

    async getItem(req: Request, res: Response) {
        const index = Number(req.params.index)
        let berries = await this.getItemUseCase.execute({ index })
        res.json({ results: berries })
    }
}