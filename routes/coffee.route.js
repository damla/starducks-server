import express from 'express'
import coffeeController from '../controllers/coffee.controller.js'

const router = express.Router()

router.get('/', (req, res) => {
  coffeeController.getCoffee(req, res)
})
// router.post('/', (req, res) => {})

// // coffee/{id}
// router.get('/:id', (req, res) => {})
// router.delete('/:id', (req, res) => {})
// router.put('/:id', (req, res) => {})

export default router
