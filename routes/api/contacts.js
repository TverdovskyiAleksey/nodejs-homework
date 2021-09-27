const express = require('express');

const router = express.Router();

const { controllerWrapper, validation } = require('../../middlewares');
const { contactSchema, validate } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

router.get('/', controllerWrapper(ctrl.listContacts));

router.get('/:id', controllerWrapper(ctrl.getById));

router.post('/', validate(contactSchema), controllerWrapper(ctrl.addContact));

router.delete('/:id', controllerWrapper(ctrl.deleteContact));

router.put(
  '/:id',
  validate(contactSchema),
  controllerWrapper(ctrl.updateContact)
);

module.exports = router;
