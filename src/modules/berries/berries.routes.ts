import { Router } from "express";
import { BerriesController } from "./BerriesController";

export const berriesRouter = Router()
export const berriesController = new BerriesController()

berriesRouter.get('/:limit', (req, res) => berriesController.getAllBerries(req, res))