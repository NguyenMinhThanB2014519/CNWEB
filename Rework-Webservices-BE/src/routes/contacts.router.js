const express = require("express");
const contacsController = require("../controllers/contacts.controller");
const { methodNotAllowed } = require("../controllers/errors.controller");
const router = express.Router();
router
  .route("/")
  .get(contacsController.getContactsByFilter)
  .post(contacsController.createContacts)
  .delete(contacsController.deleteAllContact)
  .all(methodNotAllowed);
router
  .route("/:id")
  .get(contacsController.getContact)
  .put(contacsController.updateContact)
  .delete(contacsController.deleteContact)
  .all(methodNotAllowed);

module.exports = router;
