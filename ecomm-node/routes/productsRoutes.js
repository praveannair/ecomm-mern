import express from "express";
import auth from '../middlewares/auth.js'
const app = express()
import {
  addProduct,
  removeProduct,
  showProducts,
  updateProduct,
} from "../controllers/productsController.js";
const productRouter = express.Router();

app.use(auth)

productRouter.get("/all", showProducts);
productRouter.post("/add", addProduct);
productRouter.patch("/update/:pid", updateProduct);
productRouter.delete("/delete/:pid", removeProduct);
export default productRouter;