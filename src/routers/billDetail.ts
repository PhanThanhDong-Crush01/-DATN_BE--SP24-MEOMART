import express, { Router } from "express";
import { createBillDetail } from "../controllers/billdetail";

const billDetailRouter = Router();
// billDetailRouter.get("/", getAllBill);

billDetailRouter.post("/", createBillDetail);

export default billDetailRouter;
