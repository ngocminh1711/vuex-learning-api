import express from "express";
import multer from "multer";
import OrderController from "../controllers/order.controller";

const orderController = new OrderController();
const orderRouter = express.Router();
const upload = multer();

orderRouter.post("/create-order", upload.none(), (req, res) => {
  orderController
    .createNewOrder(req, res)
    .catch((err) => res.status(500).json({ message: err.message }));
});
orderRouter.get("/", (req, res) => {
  orderController.getOrder(req, res).catch((err) => {
    res.status(500).json({ message: err.message });
  });
});
orderRouter.delete("/:id", (req, res) => {
  orderController.deleteOrder(req, res).catch((err) => {
    res.status(500).json({ message: err.message });
  });
});

export default orderRouter;
