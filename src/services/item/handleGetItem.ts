import { api } from "../../libs/axios";
import { Item } from "../../models/Item";

export async function handleGetItem(index: number): Promise<Item> {
    try {
        let { data } = await api.get(`/item/${index}`)
        return data
    } catch (error) {
        throw new Error()
    }
}