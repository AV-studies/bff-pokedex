import { api } from "../../libs/axios";
import { Berry } from "../../models/Berry";

export async function handleGetBerry(index: number): Promise<Berry> {
    try {
        let { data } = await api.get(`/berry/${index}`)
        return data
    } catch (error) {
        throw new Error()
    }
}