import { Item } from "../../../models/Item";
import { handleGetItem } from "../../../services/item/handleGetItem";
import { UseCase } from "../../../support/interfaces/useCase";

export interface GetItemDTO {
    index: number
}

export class GetItemUseCase implements UseCase<GetItemDTO, Promise<Item>> {
    async execute(dto: GetItemDTO): Promise<Item> {
        return await handleGetItem(dto.index)
    }
}