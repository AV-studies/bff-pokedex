import { Router } from "express";
import { ItemController } from "./ItemController";

export const itemRouter = Router()
export const itemController = new ItemController()

itemRouter.get('/:index', (req, res) => itemController.getItem(req, res))