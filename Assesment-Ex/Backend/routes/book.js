import express from 'express';
import controller from '../controllers/book.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  controller.getAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  controller.get(req, res, next);
});

router.post('/', (req, res, next) => {
  controller.post(req, res, next);
});

router.put('/:id', (req, res, next) => {
  controller.put(req, res, next);
});

router.delete('/:id', (req, res, next) => {
  controller.delete(req, res, next);
});



export default router;
