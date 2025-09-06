const express = require('express');
const router = express.Router();
const uploader = require('../utils/uploader.js');
const petsController = require('../controllers/pets.controller.js');
const { generatePets } = require('../utils/mocking.js');

router.get('/', petsController.getAllPets);

router.get('/mocking/:cant', (req, res, next) => {
    try {
        const { cant } = req.params;
        const pets = generatePets(cant);
        res.json({ status: 'success', payload: pets });
    } catch (error) {
        next(error);
    }
});

router.post('/', petsController.createPet);
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);

module.exports = router;