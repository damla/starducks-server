import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import connectToDb from './libs/db/mongoose.js'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import coffeeRouter from './routes/coffee.route.js'

const PORT = process.env.PORT || 4000

connectToDb()

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       contact: {
//         email: 'orhanburak@kloia.com',
//         name: 'Kloia'
//       },
//       description: 'Coffee endpoint API',
//       title: 'Coffee API',
//       version: '0.0.1'
//     },
//     servers: [
//       {
//         url: 'http://localhost:4000'
//       }
//       // {
//       //   url: '{server}',
//       //   variables: {
//       //     server: {
//       //       default: 'https://starducks-server.herokuapp.com/'
//       //     }
//       //   }
//       // }
//     ]
//   },
//   apis: ['./routes/*.route.js']
// }

// const specs = swaggerJsDoc(options)
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

// app.use(express.json())
app.use(morgan('dev'))

app.use('/coffee-list', coffeeRouter)

app.listen(PORT, () =>
  console.log(
    `✅ The server is running on: http://localhost:${PORT}\n📄 Swagger Documentation: http://localhost:${PORT}/api-docs`
  )
)

export default app
