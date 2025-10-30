import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import customerRoutes from "./routes/customerRoutes.js";

const app = express();

// DB Connection
connectDB();

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or specific domain instead of '*'
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
 });

// Routes
app.get("/", (req, res) => res.send("Home Customer API is working 🚀"));

app.use("/customer", customerRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
