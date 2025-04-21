const mongoose = require('mongoose');

// 1. Categories
const Category = mongoose.model('Category', new mongoose.Schema({
    category_id: Number,
    category_title: String,
    category_image: String
}));

// 2. Brands
const Brand = mongoose.model('Brand', new mongoose.Schema({
    brand_id: Number,
    brand_title: String
}));

// 3. User
const User = mongoose.model('User', new mongoose.Schema({
    user_id: Number,
    user_name: String,
    user_email: String,
    user_password: String,
    user_image: String,
    user_ip: String,
    user_address: String,
    user_mobile: String
}));

// 4. Product
const Product = mongoose.model('Product', new mongoose.Schema({
    product_id: Number,
    product_title: String,
    product_description: String,
    product_keywords: String,
    category_id: Number,
    brand_id: Number,
    product_image1: String,
    product_image2: String,
    product_image3: String,
    product_price: String,
    date: { type: Date, default: Date.now },
    product_qty: Number
}));

// 5. Cart
const Cart = mongoose.model('Cart', new mongoose.Schema({
    user_id: Number,
    name: String,
    price: Number,
    image: String,
    quantity: Number,
    ip_address: String,
    product_id: Number
}));

// 6. Watchlist
const Watchlist = mongoose.model('Watchlist', new mongoose.Schema({
    product_id: Number,
    product_title: String,
    product_image: String,
    user_id: String
}));

// 7. Coupon Code
const Coupon = mongoose.model('Coupon', new mongoose.Schema({
    id: Number,
    coupon_code: String,
    value: Number,
    type: String,
    minimum: Number,
    maximum: Number
}));

// 8. Admin
const Admin = mongoose.model('Admin', new mongoose.Schema({
    admin_id: Number,
    admin_name: String,
    admin_email: String,
    admin_mobile: String,
    admin_password: String
}));

// 9. Order Details
const OrderDetail = mongoose.model('OrderDetail', new mongoose.Schema({
    id: Number,
    invoice_number: String,
    product_name: String,
    price: Number,
    product_qty: Number,
    total_amount: Number,
    product_id: Number
}));

// 10. User Orders
const UserOrder = mongoose.model('UserOrder', new mongoose.Schema({
    order_id: Number,
    user_id: Number,
    invoice_number: String,
    order_date: { type: Date, default: Date.now },
    order_status: String,
    price: Number,
    delivery: Number,
    amount_que: Number,
    tran_mode: String
}));

module.exports = {
    Category,
    Brand,
    User,
    Product,
    Cart,
    Watchlist,
    Coupon,
    Admin,
    OrderDetail,
    UserOrder
};
