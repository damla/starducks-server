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
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   category:
 *                     type: string
 *                   ingredients:
 *                     items:
 *                       enum:
 *                         - iced
 *                         - hot
 *                       type: string
 *                     type: array
 *                   createdTime:
 *                     type: string
 *                   updatedTime:
 *                     type: string
 *       parameters: []
 */

// GET/coffee
router.get('/', (req, res) => {
  coffeeController.getAll(req, res)
})

/**
 * @swagger
 * /coffee:
 *    post:
 *     summary: Create a Coffee
 *     description: Create a single coffee
 *     requestBody:
 *       description: Coffee object to be created
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CoffeeRequest'
 *       required: true
 *     responses:
 *       '201':
 *         description: A Coffee Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CoffeeResponse'
 *       '400':
 *         description: Invalid Input
 *     parameters: []
 */

// POST/coffee
router.post('/', (req, res) => {
  coffeeController.create(req, res)
})

/**
 * @swagger
 * /coffee:
 * /coffee/{id}:
 *   get:
 *     summary: Get Coffee Endpoint
 *     description: Returns a single coffee instance
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         style: matrix
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A Coffee Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CoffeeResponse'
 *       '404':
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *             example: Resource Not Found
 */

// GET/coffee/:id
router.get('/:id', (req, res) => {
  coffeeController.getById(req, res)
})

// DELETE/coffee/:id
router.delete('/:id', (req, res) => {
  coffeeController.delete(req, res)
})

// PUT/coffee/:id
router.put('/:id', (req, res) => {
  coffeeController.update(req, res)
})

export default router
