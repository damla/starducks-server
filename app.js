import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import coffeeRouter from './routes/coffee.route.js'
import { Low, JSONFile } from 'lowdb'

const PORT = process.env.PORT || 4000

const adapter = new JSONFile('db.json')
const db = new Low(adapter)

await db.read()
db.data = db.data || { coffees: [] }
await db.write()

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      contact: {
        email: 'orhanburak@kloia.com',
        name: 'Kloia'
      },
      description: 'Coffee endpoint API',
      title: 'Coffee API',
      version: '0.0.1'
    },
    servers: [
      {
        url: '{server}/interview/v0',
        variables: {
          server: {
            default: 'https://kloia-apim-gateway.cloud.gravitee.io'
          }
        }
      }
    ]
  },
  apis: ['./routes/*.route.js']
}

const specs = swaggerJsDoc(options)

const app = express()

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.db = db
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/coffee', coffeeRouter)

app.listen(PORT, () =>
  console.log(
    `✅ The server is running on port ${PORT}\n http://localhost:4000`
  )
)

export default app
