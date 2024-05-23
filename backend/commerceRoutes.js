const express = require('express');
const router = express.Router();
const Commerce = require('./commerce');

router.get('/', async (req, res) => {
    try {
        const commerces = await Commerce.find();
        res.json(commerces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;