// const contactsOperations = require('../model');
const CreateError = require('http-errors');
const { Contact } = require('../models');

const listContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts,
    },
  });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new CreateError(404, `Prooduct with id=${id} not found`);
  }
  res.json(contact);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw new CreateError(404, `Prooduct with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Success delete',
  });
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body);
  if (!result) {
    throw new CreateError(404, `Product with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body);
  if (!result) {
    throw new CreateError(404, 'missing field favorite');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = {
  listContacts,
  getById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
};
