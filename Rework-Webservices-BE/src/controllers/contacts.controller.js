const ApiError = require("../api-errors");
const makeContactsService = require("../services/services.contacts.services");

async function createContacts(req, res, next) {
  if (!req.body?.name) {
    return next(new ApiError(400, "Name cannot be empty"));
  }

  try {
    const contactsService = makeContactsService();
    const contact = await contactsService.createContact(req.body);
    return res.send(contact);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
}

async function getContactsByFilter(req, res, next) {
  let contacts = [];
  try {
    const contactsService = makeContactsService();
    contacts = await contactsService.getManyContacts(req.query);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retrieving contacts")
    );
  }
  return res.send(contacts);
}

async function getContact(req, res, next) {
  try {
    const contactsService = makeContactsService();
    const contact = await contactsService.getContactById(req.params.id);
    if (!contact) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send(contact);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error retrieving contact with id=${req.params.id}`)
    );
  }
}

async function updateContact(req, res, next) {
  if (Object.keys(req.body).length == 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const contactsService = makeContactsService();
    const updated = contactsService.updateContact(req.params.id, req.body);
    if (!updated) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was updated successfully" });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error updating contact with id = ${req.params.id}`)
    );
  }
}
function deleteContact(req, res) {
  return res.send({
    message: "DeleteContact handler",
  });
}

function deleteAllContact(req, res) {
  return res.send({
    message: "deleteAllContact handler",
  });
}
module.exports = {
  getContactsByFilter,
  deleteAllContact,
  getContact,
  createContacts,
  updateContact,
  deleteContact,
};
