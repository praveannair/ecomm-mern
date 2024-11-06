import e from "express";
import {
  addProduct,
  removeProduct,
  showProducts,
  updateProduct,
} from "../controllers/productsController.js";
const productRouter = e.Router();

productRouter.get("/all", showProducts);
productRouter.post("/add", addProduct);
productRouter.patch("/update/:pid", updateProduct);
productRouter.delete("/delete/:pid", removeProduct);
export default productRouter;