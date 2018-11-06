const express = require('express');
const router = express.Router();
const articulo = require('../Controllers/articulo.controller');

router.get('/',articulo.getAllArticulos);
router.post('/',articulo.getArticulos);
router.post('/create',articulo.createArticulo);
router.put('/:id',articulo.editArtitculo);
router.delete('/:id',articulo.deleteArticulo);


module.exports = router;
