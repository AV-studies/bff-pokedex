import { Router } from "express";
import { berriesRouter } from "./modules/berries/berries.routes";
import { itemRouter } from "./modules/item/item.routes";

export const appRoutes = Router()

appRoutes.use('/berries', berriesRouter)
appRoutes.use('/item', itemRouter)