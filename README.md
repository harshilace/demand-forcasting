...existing code...
# Demand Forecasting — Home Customer API

Lightweight Express + Mongoose service to collect customer interaction events per-domain into dynamic MongoDB collections.

## Repo layout
- [index.js](index.js) — app entry, middleware and route registration.
- [package.json](package.json) — scripts and dependencies.
- [.env.example](.env.example) — example environment variables (copy to `.env`).
- [.gitignore](.gitignore)
- [config/database.js](config/database.js) — MongoDB connection (`[`connectDB`](config/database.js)`]).
- [routes/customerRoutes.js](routes/customerRoutes.js) — HTTP routes mapping to controller actions.
- [controllers/customerController.js](controllers/customerController.js) — main request handlers (see listed functions below).
- [models/customerModel.js](models/customerModel.js) — Mongoose schemas and dynamic model factories (see listed functions below).
- [public/](public/) — static assets served by Express.
- [views/](views/) — EJS views (if needed).
- [redme.md](redme.md) — this file.

## Key symbols and files
- Database connect: [`connectDB`](config/database.js) — [config/database.js](config/database.js)
- Router: [routes/customerRoutes.js](routes/customerRoutes.js)
- Controller (exported default object): [`customerController`](controllers/customerController.js) — file: [controllers/customerController.js](controllers/customerController.js)
  - Methods:
    - [`customerController.createDomainCollection`](controllers/customerController.js)
    - [`customerController.addHomeCustomer`](controllers/customerController.js)
    - [`customerController.addProductCustomer`](controllers/customerController.js)
    - [`customerController.addCollectionCustomer`](controllers/customerController.js)
    - [`customerController.addCartCustomer`](controllers/customerController.js)
    - [`customerController.addBlogCustomer`](controllers/customerController.js)
    - [`customerController.addPageCustomer`](controllers/customerController.js)
    - [`customerController.addSearchCustomer`](controllers/customerController.js)
    - [`customerController.getCustomerDetails`](controllers/customerController.js)
    - [`customerController.updateCustomerDetails`](controllers/customerController.js)
    - [`customerController.deleteCustomer`](controllers/customerController.js)
- Models and helpers (file: [models/customerModel.js](models/customerModel.js)):
  - [`getHomeModel`](models/customerModel.js)
  - [`getProductModel`](models/customerModel.js)
  - [`getCollectionModel`](models/customerModel.js)
  - [`getCartModel`](models/customerModel.js)
  - [`getBlogModel`](models/customerModel.js)
  - [`getPageModel`](models/customerModel.js)
  - [`getSearchModel`](models/customerModel.js)
  - [`getModel`](models/customerModel.js)
  - [`getDomainListModel`](models/customerModel.js)

## Setup

1. Install dependencies
```sh
npm install
```

2. Create .env (copy example)
```sh
cp [.env.example](http://_vscodecontentref_/0) .env
# edit .env and set MONGO_URI if needed
```

3. Start server (development)
```sh
npm run dev
```