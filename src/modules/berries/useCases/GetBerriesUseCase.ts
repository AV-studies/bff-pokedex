import { Berry } from "../../../models/Berry";
import { handleGetBerry } from "../../../services/berries/handleGetBerries";
import { UseCase } from "../../../support/interfaces/useCase";

export interface GetBerriesDTO {
    limit: number
}

export class GetBerriesUseCase implements UseCase<GetBerriesDTO, Promise<Berry[]>> {

    async execute(dto: GetBerriesDTO): Promise<Berry[]> {
        var berries: Berry[] = []

        for (let index = 1; index <= dto.limit; index++) {
            let berry = await handleGetBerry(index)

            berries.push(berry)
        }

        return berries
    }
}