import express from "express";
const router =  express.Router();
import studentController from '../controller/studentController.js'



router.get('/',studentController.GetAllDoc)
router.post('/',studentController.CreateDoc)
router.get('/edit/:id',studentController.EditDoc)
router.post('/update/:id',studentController.UpdateDocById)
router.post('/delete/:id',studentController.DeleteDocById)


export default router