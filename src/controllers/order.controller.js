import Order from "../models/order.schema/order.schema.js";

class OrderController {
  async createNewOrder(req, res) {
    try {
      let userInfo = req.body.userInfo;
      let products = req.body.products.cart.products;
      let totalMoney = req.body.products.cart.totalPrice;
      let newOrder = new Order({
        firstName: userInfo.firstname,
        lastName: userInfo.lastname,
        addressCustomer: userInfo.address,
        email: userInfo.email,
        phonenumber: userInfo.phonenumber,
        totalMoney: totalMoney,
        products: products,
        date: Date.now()
      });
      await newOrder.save();
      return res.status(200).json({
        message: "Successfully created order",
        data: newOrder,
      });
      } catch (err) {
        return res.status(200).json({ message: err.message });
    }
  }
  async getOrder(req, res) {
    try {
        let order = await Order.find();
        return res.status(200).json({
            message: "Successfully get order",
            data: order
        })
    }
    catch (err) {
        return res.status(200).json({ message: err.message });
    }
  }
  async deleteOrder(req, res) {
    try {
      let id = req.params.id;
      let deletedOrder = await Order.findByIdAndDelete(id)
      return res.status(200).json({ 
        message: "Order delete successfully",
        data: deletedOrder
      })
    }
    catch(err) {
      return res.status(200).json({ message: err.message });
    }
  }
}

export default OrderController;
