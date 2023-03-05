import express from "express";
import getProduct from "../controller/client.js";

const router = express.Router();

router.get("/product",getProduct);


export default router;
