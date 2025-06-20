// src/routes/health.js
import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.db().admin().ping();
    await client.close();
    res.json({ status: 'OK', db: 'connected' });
  } catch (err) {
    res.status(500).json({ status: 'FAILED', db: 'disconnected' });
  }
});

export default router; // ✅ This is required for `import healthRoute from './routes/health.js';`
