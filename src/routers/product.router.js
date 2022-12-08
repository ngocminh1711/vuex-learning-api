import express from 'express';
import multer from 'multer';
import ProductController from '../controllers/products.controller.js';

const upload = multer();
const productRouter = express.Router();
const productController = new ProductController();

productRouter.post('/create',upload.none(), (req, res) => {
    productController.createProduct(req, res).catch((err) => { res.status(500).json('Server error') });
} )
productRouter.get('/', (req, res) => {
    productController.getAllProduct(req, res).catch((err) => { res.status(500).json('Server error') });
})
productRouter.delete('/:id', (req, res) => {
    productController.deleteProduct(req, res).catch((err) => { res.status(500).json('Server error') });
})
productRouter.patch('/:id', (req, res) => {
    productController.editProduct(req, res).catch((err) => { res.status(500).json('Server error') });
})
productRouter.get('/getProductById/:id', (req, res) => {
    productController.getProductById(req, res).catch((err) => { res.status(500).json('Server error') })
})


export default productRouter;





    