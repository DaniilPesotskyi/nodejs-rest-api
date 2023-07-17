import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import contactsAddSchema from "../../schemas/contacts-shemas.js";
import validateBody from "../../decorators/validateBody.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:contactId", contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.add
);

contactsRouter.delete("/:contactId", contactsController.deleteByid);

contactsRouter.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.updateById
);

export default contactsRouter;
