import express  from "express";
import {getAdmin} from "../controller/management.js";

const router = express.Router();

router.get("/admin",getAdmin);

export default router;