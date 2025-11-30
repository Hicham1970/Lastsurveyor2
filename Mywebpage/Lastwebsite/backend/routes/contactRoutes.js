import express from 'express';
import { createContact } from '../controllers/contactController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('phone').optional().trim().escape(),
    body('message').notEmpty().trim().escape()
  ],
  createContact
);

export default router;