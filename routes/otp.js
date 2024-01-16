import express from "express"
import {generateotp,matchOTP} from "../controller/otp.js"

const router=express.Router();

router.post('/new',generateotp);
router.post('/match',matchOTP);

export default router;