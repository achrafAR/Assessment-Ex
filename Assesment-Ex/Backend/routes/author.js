import express from 'express';
const router = express.Router();
import controller from '../controllers/author.js';

try{
    console.error(controller)
}
catch {
    console.log("error")
}
router.get('/',controller.getAll);
router.get('/:id',controller.get);


export default router;