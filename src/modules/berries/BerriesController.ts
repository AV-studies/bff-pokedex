import { Request, Response } from "express";
import { GetBerriesUseCase } from "./useCases/GetBerriesUseCase";

export class BerriesController {

    private getBerriesUseCase = new GetBerriesUseCase()

    async getAllBerries(req: Request, res: Response) {
        const limit = Number(req.params.limit)

        let berries = await this.getBerriesUseCase.execute({ limit })
        res.json({ results: berries })
    }
}