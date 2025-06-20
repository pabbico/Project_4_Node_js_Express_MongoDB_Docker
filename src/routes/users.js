import express from 'express';
const router = express.Router();

// Test endpoint
router.get('/', (req, res) => {
  res.json({ message: "API is working!" });
});

export default router;