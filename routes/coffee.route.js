import express from 'express'
import coffeeController from '../controllers/coffee.controller.js'
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     CoffeeRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         ingredients:
 *           type: array
 *           items:
 *             enum:
 *               - iced
 *               - hot
 *             type: string
 *       required:
 *         - category
 *         - title
 *     CoffeeResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         ingredients:
 *           type: array
 *           items:
 *             enum:
 *               - iced
 *               - hot
 *             type: string
 *         createdTime:
 *           type: string
 *         updatedTime:
 *           type: string
 *       required:
 *         - id
 *     CoffeeList:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *             format: uuid
 *           title:
 *             type: string
 *           description:
 *             type: string
 *           category:
 *             type: string
 *           ingredients:
 *             items:
 *               enum:
 *                 - iced
 *                 - hot
 *               type: string
 *             type: array
 *           createdTime:
 *             type: string
 *           updatedTime:
 *             type: string
 *         required:
 *           - id
 *   links: {}
 *   callbacks: {}
 */

/**
 * @swagger
 * /coffee:
 *   get:
 *     summary: Get Coffees Endpoint
 *     description: Returns a single coffee instance
 *     responses:
 *       '200':
 *         description: A Coffee Response
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 category:
 *                   type: string
 *                 ingredients:
 *                   items:
 *                     enum:
 *                       - iced
 *                       - hot
 *                     type: string
 *                   type: array
 *                 createdTime:
 *                   type: string
 *                 updatedTime:
 *                   type: string
 *               required:
 *                 - id
 *     parameters: []
 */

router.get('/', (req, res) => {
  coffeeController.getCoffee(req, res)
})
// router.post('/', (req, res) => {})

// // coffee/{id}
// router.get('/:id', (req, res) => {})
// router.delete('/:id', (req, res) => {})
// router.put('/:id', (req, res) => {})

export default router
