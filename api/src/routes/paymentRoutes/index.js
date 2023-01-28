const { Router } = require("express");
const { payment } = require("../../controllers/paymentController");

const paymentRouter = Router();

paymentRouter.post("/", payment);

module.exports = paymentRouter;