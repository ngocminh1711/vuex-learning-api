import Product from "../models/product.schema/product.schema.js";

class ProductController {
  async createProduct(req, res) {
    try {
      let data = req.body;
      let product = new Product(data);
      await product.save();

      return res.status(200).json({
        status: "successfully",
        data: product,
      });
    } catch (err) {
      res.json({
        status: "error",
        message: "Create new product error",
      });
    }
  }
  async getAllProduct(req, res, next) {
    try {
      let productData = await Product.find();
      return res.status(200).json({
        status: "Get data successfully",
        data: productData,
      });
    } catch (err) {
      res.json({
        status: "error",
        message: "Get data error",
      });
    }
  }
  async deleteProduct(req, res) {
    try {
      let id = req.params.id;
      await Product.findByIdAndDelete(id);
      return res.status(200).json({
        status: "delete successfully",
      });
    } catch (err) {
      return res.status(404).json(err.message);
    }
  }
  async editProduct(req, res, next) {
    try {
      let idProduct = req.params.id;
      let dataForm = {
        name: req.body.name,
        price: req.body.price,
        amount: req.body.amount,
        detail: req.body.detail,
        image: req.body.image,
      };
      let editProduct = await Product.findByIdAndUpdate(idProduct, {
        name: dataForm.name,
        price: dataForm.price,
        amount: dataForm.amount,
        detail: dataForm.detail,
        image: dataForm.image,
      });
      let editedProduct = await Product.findById(idProduct);
      return res.status(200).json({
        data: editedProduct,
        status: "Update product successfully",
      });
    } catch (err) {
      return res.status(200).json({
        status: "Update Error",
      });
    }
  }
  async getProductById(req, res) {
    try {
      let idProduct = req.params.id;
      let product = await Product.findById(idProduct);
      return res.status(200).json({
        status: "get product successfully",
        data: product,
      });
    } catch (err) {
      return res.status(200).json({
        status: "Get product error",
      });
    }
  }
}

export default ProductController;
