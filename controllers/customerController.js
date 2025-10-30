import {
  getHomeModel,
  getProductModel,
  getCollectionModel,
  getCartModel,
  getBlogModel,
  getPageModel,
  getSearchModel,
  getModel,
  getDomainListModel,
} from "../models/customerModel.js";

const customerController = {
  //************************* CUSTOMER INSTALL TABLE (DOMAIN) **********/
  createDomainCollection: async (req, res) => {
    try {
      const { domain } = req.body;

      if (!domain?.trim()) {
        return res.status(400).json({
          success: false,
          message: "Missing required parameter: domain",
        });
      }

      const result = await getDomainListModel(domain.trim());

      let successMessage = result.created
        ? `Domain collection '${domain.trim()}' was successfully created.`
        : `Domain collection '${domain.trim()}' already exists.`;

      return res.status(200).json({
        success: true,
        message: successMessage,
        created: result.created,
      });
    } catch (error) {
      console.error("Error creating domain collection:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },
  //************************ ADD HOME **************** */
  addHomeCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;
      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }
      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };

      const HomeCustomer = getHomeModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null,
          other_data: json_data?.other_data || {},
        },
      };

      const savedRecord = await HomeCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Home page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving home customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  //************************ ADD PRODUCT **************** */
  addProductCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;
      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }
      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };

      const ProductCustomer = getProductModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null,
          other_data: json_data?.other_data || {},
        },
      };

      const savedRecord = await ProductCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Product page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving product customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  //************************ ADD COLLECTION **************** */
  addCollectionCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;
      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }
      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };
      const CollectionCustomer = getCollectionModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null,
          other_data: json_data?.other_data || {},
        },
      };
      const savedRecord = await CollectionCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Collection page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving collection customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  //************************ ADD CART **************** */
  addCartCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;
      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }
      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };
      const CartCustomer = getCartModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null,
          other_data: json_data?.other_data || {},
        },
      };
      const savedRecord = await CartCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Cart page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving cart customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  //************************ ADD BLOG **************** */
  addBlogCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;
      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }
      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };

      const BlogCustomer = getBlogModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null,
          other_data: json_data?.other_data || {},
        },
      };

      const savedRecord = await BlogCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Blog page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving blog customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  //************************ ADD PAGE **************** */
  addPageCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;
      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }
      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };
      const PageCustomer = getPageModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null,
          other_data: json_data?.other_data || {},
        },
      };

      const savedRecord = await PageCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving page customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },

  //************************ ADD SEARCH **************** */
  addSearchCustomer: async (req, res) => {
    try {
      const { domain, ip, customer_id, type, device, json_data } = req.body;

      if (
        !domain ||
        !ip ||
        !type ||
        !device?.type ||
        !device?.browser ||
        !device?.location ||
        json_data?.action === undefined ||
        json_data?.action === null ||
        json_data?.action === ""
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: domain, ip, type, device(type/browser/location), json_data.action",
        });
      }

      const location = {
        ip: device?.location?.ip || null,
        country: device?.location?.country || null,
        lat_log: device?.location?.lat_log || null,
      };

      const SearchCustomer = getSearchModel(domain);

      const payload = {
        ip,
        customer_id: customer_id || null,
        type,
        timestamp: new Date().toISOString(),
        device: {
          type: device.type,
          browser: device.browser,
          location,
        },
        json_data: {
          action: json_data?.action || null,
          time_spent: json_data?.time_spent || null,
          product_id: json_data?.product_id || null, 
          other_data: json_data?.other_data || {},
        },
      };

      const savedRecord = await SearchCustomer.create(payload);

      return res.status(201).json({
        success: true,
        message: `Search page customer data saved successfully in collection: ${domain}`,
        data: savedRecord,
      });
    } catch (error) {
      console.error("Error saving search customer data:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  },
  //************************ GET CUSTOMER DETAILS **************** */
  getCustomerDetails: async (req, res) => {
    try {
      const { domain, customer, type, ip } = req.query;
      if (!domain?.trim()) {
        return res
          .status(400)
          .json({
            statusCode: 400,
            error: "Missing required query parameter: domain",
          });
      }
      const query = {};
      if (customer?.trim()) query.customer_id = customer.trim();
      if (type?.trim()) query.type = type.trim();
      if (ip?.trim()) query.ip = ip.trim();

      const CustomerModel = getModel(domain); // get Mongoose model dynamically
      const customers = await CustomerModel.find(query).lean();

      return res.status(200).json({
        statusCode: 200,
        message: `${customers.length} customer(s) found`,
        data: customers,
      });
    } catch (err) {
      console.error("DB query error:", err);
      return res
        .status(500)
        .json({ statusCode: 500, error: "Failed to fetch customer details" });
    }
  },

  //************************ UPDATE CUSTOMER DETAILS **************** */
  updateCustomerDetails: async (req, res) => {
    try {
      const { domain, customer_id, type, ip, ...updateFields } = req.body;

      if (!domain?.trim() || !customer_id || !type?.trim()) {
        return res
          .status(400)
          .json({
            statusCode: 400,
            error: "Missing required parameters: domain, customer_id, type",
          });
      }

      if (Object.keys(updateFields).length === 0) {
        return res
          .status(400)
          .json({ statusCode: 400, error: "No fields provided to update" });
      }

      const CustomerModel = getModel(domain);

      // Convert customer_id to string to avoid type mismatch
      const filter = {
        customer_id: customer_id.toString(),
        type: type.trim(),
      };
      if (ip?.trim()) filter.ip = ip.trim();

      // Flatten nested objects for MongoDB $set
      const flattenObject = (obj, parentKey = "", res = {}) => {
        for (let key in obj) {
          const propName = parentKey ? `${parentKey}.${key}` : key;
          if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
          ) {
            flattenObject(obj[key], propName, res);
          } else {
            res[propName] = obj[key];
          }
        }
        return res;
      };
      const updatePayload = flattenObject(updateFields);

      // Find the latest record based on _id
      const lastRecord = await CustomerModel.findOne(filter).sort({ _id: -1 });

      if (!lastRecord) {
        return res
          .status(404)
          .json({
            statusCode: 404,
            error: "No matching customer record found",
          });
      }

      // Update only the last record
      const updateResult = await CustomerModel.updateOne(
        { _id: lastRecord._id },
        { $set: updatePayload }
      );

      return res.status(200).json({
        statusCode: 200,
        message: `Last customer record updated successfully`,
        matchedCount: updateResult.matchedCount,
        modifiedCount: updateResult.modifiedCount,
      });
    } catch (err) {
      console.error("DB update error:", err);
      return res
        .status(500)
        .json({ statusCode: 500, error: "Failed to update customer details" });
    }
  },

  //************************ DELETE CUSTOMER **************** */
  deleteCustomer: async (req, res) => {
    try {
      const { domain, ids } = req.body;
      if (!domain?.trim() || !Array.isArray(ids) || ids.length === 0) {
        return res
          .status(400)
          .json({
            statusCode: 400,
            error: "Missing required parameters: domain or ids",
          });
      }
      const CustomerModel = getModel(domain);

      const deleteResult = await CustomerModel.deleteMany({
        customer_id: { $in: ids },
      });

      return res.status(200).json({
        statusCode: 200,
        message: `${deleteResult.deletedCount} customer(s) deleted`,
        deletedCount: deleteResult.deletedCount,
      });
    } catch (err) {
      console.error("DB delete error:", err);
      return res
        .status(500)
        .json({ statusCode: 500, error: "Failed to delete customers" });
    }
  },
};

export default customerController;
