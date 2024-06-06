import express from "express";
import Student from "./student.js";
const router = express.Router();

// Route pour obtenir tous les étudiants
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
