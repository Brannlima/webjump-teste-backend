const express = require('express');

const categoryController = require('./controllers/CategoryController');
const productController = require('./controllers/ProductController');
const dashboardController = require('./controllers/DashboardController');

const routes = express.Router();

routes.get('/', dashboardController.renderDashboard);

routes.get('/categories', categoryController.renderCategory);
routes.get('/categories/add', categoryController.renderAddCategory);
routes.get('/categories/get', categoryController.getAll)
routes.get('/categories/get/:id', categoryController.getOne)
routes.post('/categories/create', categoryController.createCategory);
routes.patch('/categories/update/:id', categoryController.updateCategory);
routes.delete('/categories/delete/:id', categoryController.deleteCategory);

routes.get('/products', productController.renderProduct);
routes.get('/products/add', productController.renderAddProduct);
routes.get('/products/get', productController.getAll)
routes.get('/products/get/:id', productController.getOne)
routes.post('/products/create', productController.createProduct);
routes.post('/products/update/:id', productController.updateProduct);
routes.post('/products/delete/:id', productController.deleteProduct);

module.exports = routes;
