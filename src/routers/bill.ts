import express, { Router } from "express";
import { createBill, getAllBill } from "../controllers/bill";

const billRouter = Router();
billRouter.get("/", getAllBill);

billRouter.post("/", createBill);

export default billRouter;
