import { Router } from "express";
import { berriesRouter } from "./modules/berries/berries.routes";

export const appRoutes = Router()

appRoutes.use('/berries', berriesRouter)