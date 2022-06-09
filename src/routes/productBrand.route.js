const express = require('express');
const {
  getAllBrand,
  getBrandId,
  insertBrand,
  updateBrand,
  deleteBrand,
} = require('../controllers/productBrand.controller');

const {
  insertValidation,
  deleteValidation,
  updateValidation,
} = require('../validations/brand.validation');
const validation = require('../middlewares/validation');

const jwtAuth = require('../middlewares/jwtAuth');
const { isAdmin } = require('../middlewares/authorization');
const brandUpload = require('../middlewares/uploadProductBrand');

const router = express.Router();

router
  .get('/brand', jwtAuth, isAdmin, getAllBrand)
  .get('/brand/:id', jwtAuth, isAdmin, getBrandId)
  .post(
    '/brand',
    jwtAuth,
    isAdmin,
    brandUpload,
    insertValidation,
    validation,
    insertBrand
  )
  .put(
    '/brand/:id',
    jwtAuth,
    isAdmin,
    brandUpload,
    updateValidation,
    validation,
    updateBrand
  )
  .put(
    '/brand/delete/:id',
    jwtAuth,
    isAdmin,
    deleteValidation,
    validation,
    deleteBrand
  );

module.exports = router;
