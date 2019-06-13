const express = require('express');

const ApiStatusService = "./services/apiStatusService";

// const UserService = require('@Services/userService');
const router = express.Router({ mergeParams: true });

// DELETE delete admin user - admin authentication
router.delete('/delete/:id'/*, canEditSuperUsers*/, (req, res) => {
  const { id } = req.params;

  ApiStatusService.remove(id).then(() => {
    req.flash('success_msg', 'User sucessfully deleted');
    res.sendStatus(200);
  }).catch((errors) => {
    res.status(400).json(errors);
  });
});

module.exports = router;
