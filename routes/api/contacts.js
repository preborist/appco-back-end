const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { listContacts, getContactById } = require('../../model/index');
// const {
//   schemaCreateContact,
//   schemaUpdateContact,
//   schemaStatusContact,
// } = require('./validation');

router.get('/', async (_req, res, next) => {
  try {
    const results = await listContacts();
    return res.status(200).json({ status: 'success', code: 200, results });
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    // if (!mongoose.isValidObjectId(req.params.userId)) {
    //   return res.status(400).json({ message: 'invalid contactId value' });
    // }
    const results = await getContactById(req.params.userId);

    if (results) {
      return res.status(200).json({ status: 'success', code: 200, results });
    }
    return res
      .status(404)
      .json({ status: 'error', code: 404, message: 'Not Found' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
