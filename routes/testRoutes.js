import express from "express";
import Test from "../models/Test.js";
import { createTest } from "../controllers/testController.js";

const testRouter = express.Router();

testRouter.post("/", createTest);

export default testRouter;