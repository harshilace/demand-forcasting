import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router.post("/create-domain", customerController.createDomainCollection);
router.post("/add-home", customerController.addHomeCustomer);
router.post("/add-product", customerController.addProductCustomer);
router.post("/add-collection", customerController.addCollectionCustomer);
router.post("/add-cart", customerController.addCartCustomer);
router.post("/add-blog", customerController.addBlogCustomer);
router.post("/add-page", customerController.addPageCustomer);
router.post("/add-search", customerController.addSearchCustomer);
router.get('/get-customer-details',customerController.getCustomerDetails);
router.put('/update-customer-details',customerController.updateCustomerDetails);
router.delete('/delete-customer',customerController.deleteCustomer)

export default router;



