import express from 'express'
const router = express.Router()
import { v4 as uuidv4 } from 'uuid'

// uuidv4()
// uuid.parse(str)

router.get('/', (req, res) => {})
router.post('/', (req, res) => {})

// coffee/{id}
router.get('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})
router.put('/:id', (req, res) => {})

export default router
