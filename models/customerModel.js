import mongoose from "mongoose";

//************************ COMMON SCHEMA **************** */
const customerSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    customer_id: { type: String, default:null },
    type: {
      type: String,
      enum: ["home", "product", "collection", "cart", "blog", "page", "search"],
      required: true,
    },
    timestamp: { type: Date, default: Date.now },
    device: {
      type: {
        type: String,
        required: true,
      },
      browser: {
        type: String,
        required: true,
      },
      location: {
        ip: { type: String, default:null },
        country: { type: String,  default:null },
        lat_log: { type: String,  default:null },
      },
    },
    json_data: {
      action: { type: String,  default:null },
      time_spent: { type: Number,  default:null },
      product_id: { type: String,  default:null },
      other_data: { type: mongoose.Schema.Types.Mixed },
    },
  },
  { strict: false }
);

//************************ GET DYNAMIC MODELS **************** */
export const getHomeModel = (domain) => {
  const modelName = `HomeCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

export const getProductModel = (domain) => {
  const modelName = `ProductCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

export const getCollectionModel = (domain) => {
  const modelName = `CollectionCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

export const getCartModel = (domain) => {
  const modelName = `CartCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

export const getBlogModel = (domain) => {
  const modelName = `BlogCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

export const getPageModel = (domain) => {
  const modelName = `PageCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

export const getSearchModel = (domain) => {
  const modelName = `SearchCustomer_${domain}`;
  return (
    mongoose.models[modelName] ||
    mongoose.model(modelName, customerSchema, domain.toLowerCase())
  );
};

const genericSchema = new mongoose.Schema({}, { strict: false });
export const getModel = (collectionName) => {
  if (mongoose.models[collectionName]) {
    return mongoose.models[collectionName];
  }
  return mongoose.model(collectionName, genericSchema, collectionName);
};

//************************ COLLECTION LIST **************** */

export const getDomainListModel = async (domain) => {
 try {
    const db = mongoose.connection;
    const collectionName = domain.toLowerCase();
    const modelName = `Customer_${domain}`;

    // Check if collection already exists
    const existingCollections = await db.db.listCollections().toArray();
    const collectionExists = existingCollections.some(
      (col) => col.name === collectionName
    );

    if (collectionExists) {
      return {
        created: false,
        message: `Collection '${domain}' already exists.`,
      };
    }

    // Register Mongoose model (if not already registered)
    if (!mongoose.models[modelName]) {
      mongoose.model(modelName, customerSchema, collectionName);
    }

    // Explicitly create collection in MongoDB
    await db.db.createCollection(collectionName);

    return {
      created: true,
      message: `Collection '${domain}' created successfully.`,
    };
  } catch (error) {
    console.error("Error in getDomainListModel:", error.message);
    throw new Error("Failed to create domain collection");
  }
};
