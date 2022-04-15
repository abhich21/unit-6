const express = require('express');
const router = express.Router();
const Spot = require('../models/spot.model');
const crudController = require('./crud.controller');

router.post("", crudController(Spot).Post);
router.get("", crudController(Spot).Get);
router.get("/:id", crudController(Spot).GetOne);
router.delete("/:id", crudController(Spot).Delete);
router.patch("/:id", crudController(Spot).Patch);


module.exports = router;
