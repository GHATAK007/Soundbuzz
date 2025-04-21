const express = require('express');
const router = express.Router();
const {
  Category, Brand, User, Product, Cart, Watchlist,
  Coupon, Admin, OrderDetail, UserOrder
} = require('./models');

// Generic CRUD Route Generator
function generateCrudRoutes(model, path) {
  router.post(`/${path}`, async (req, res) => {
    try {
      const doc = new model(req.body);
      await doc.save();
      res.send(doc);
    } catch (err) {
      console.error(`Error in POST ${path}:`, err);
      res.status(500).send('Error saving the document');
    }
  });

  router.get(`/${path}`, async (req, res) => {
    try {
      // console.log(`Fetching ${path} data...`);
      const items = await model.find();
      res.send(items);
    } catch (err) {
      console.error(`Error in GET ${path}:`, err);
      res.status(500).send('Error fetching data');
    }
  });

  router.put(`/${path}/:id`, async (req, res) => {
    try {
      const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(item);
    } catch (err) {
      console.error(`Error in PUT ${path}:`, err);
      res.status(500).send('Error updating the document');
    }
  });

  router.delete(`/${path}/:id`, async (req, res) => {
    try {
      await model.findByIdAndDelete(req.params.id);
      res.send({ message: `${path} deleted` });
    } catch (err) {
      console.error(`Error in DELETE ${path}:`, err);
      res.status(500).send('Error deleting the document');
    }
  });
}

// Routes for All Models
generateCrudRoutes(Category, 'categories');
generateCrudRoutes(Brand, 'brands');
generateCrudRoutes(User, 'users');
generateCrudRoutes(Product, 'products');
generateCrudRoutes(Cart, 'carts');
generateCrudRoutes(Watchlist, 'watchlists');
generateCrudRoutes(Coupon, 'coupons');
generateCrudRoutes(Admin, 'admins');
generateCrudRoutes(OrderDetail, 'orderdetails');
generateCrudRoutes(UserOrder, 'userorders');

module.exports = router;
