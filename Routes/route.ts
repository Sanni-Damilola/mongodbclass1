import { Router } from "express";
import {
  deletedata,
  getall,
  getone,
  postdata,
  updatedata,
} from "../Controller/control";

const route = Router();

route.route("/getall").get(getall);
route.route("/getone/:id").get(getone);
route.route("/update/:id").patch(updatedata);
route.route("/post").post(postdata);
route.route("/delete/:id").delete(deletedata);

export default route;
