const {Router} = require("express");
const placeOrder = require("../handlers/placeOrder");
const successfulPayment = require("../handlers/success");

const paymentRouter = Router();

paymentRouter.post("/order", placeOrder);
paymentRouter.get("/success", successfulPayment);

module.exports = paymentRouter;
