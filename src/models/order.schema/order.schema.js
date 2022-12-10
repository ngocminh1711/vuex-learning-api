import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    addressCustomer: { type: String },
    email: { type: String },
    phonenumber: { type: Number },
    totalMoney: { type: Number },
    date: { type: Date},
    products: []
});

const Order = mongoose.model("Order", orderSchema);
export default Order;