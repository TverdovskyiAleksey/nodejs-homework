const express = require('express');

const router = express.Router();

const { controllerWrapper, validation } = require('../../middlewares');
const { JoiSchema } = require('../../models/contact');
// const { contactSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

router.get('/', controllerWrapper(ctrl.listContacts));

router.get('/:id', controllerWrapper(ctrl.getById));

router.post('/', validation(JoiSchema), controllerWrapper(ctrl.addContact));

router.delete('/:id', controllerWrapper(ctrl.deleteContact));

router.post('/:id/favorite', controllerWrapper(ctrl.updateContact));

router.put(
  '/:id',
  validation(JoiSchema),
  controllerWrapper(ctrl.updateContact)
);

module.exports = router;
