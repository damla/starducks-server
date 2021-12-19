import Coffee from '../models/coffee.model.js'

const controller = {}

controller.getAll = async (req, res) => {
  try {
    // pull data from db
    let coffees = await Coffee.getAll()
    console.log(coffees)

    // send data pulled from db
    if (coffees <= 0) res.status(404).json('Coffee data does not exist.')
    else res.status(200).json(coffees)
  } catch (err) {
    console.error('Error in getting coffees data - ' + err.message)
    res.status(500).json({ error: 'Got error in getAll controller of coffees' })
  }
}

controller.getById = async (req, res) => {
  try {
    // pull data from db
    let coffee = await Coffee.getById(req.params.id)
    console.log(coffee)

    // send data pulled from db
    if (!coffee) res.status(404).json('Coffee data does not exist.')
    else res.status(200).json(coffee)
  } catch (err) {
    console.error('Error in getting coffee data - ' + err.message)
    res.status(500).json({ error: 'Got error in getById controller of coffee' })
  }
}

// controller.getCoffees = async (req, res) => {
//   try {
//     const coffees = db.get('coffees')

//     if (coffees && coffees.length <= 0) {
//       res.status(404).json('Coffee list not found.')
//     } else {
//       res.status(200).json(coffees)
//     }
//   } catch (err) {
//     console.error('Error in getting coffee list data - ' + err.message)
//     res.status(500).json({ error: 'Got error while getting Coffee list data.' })
//   }
// }

// controller.getByCoffeeId = (req, res) => {
//   try {
//     const coffee = db
//       .get('coffees')
//       .filter((coffee) => coffee.id === req.params.id)

//     if (!coffee) {
//       res.status(404).json('Coffee not found.')
//     } else {
//       res.status(200).json(coffee)
//     }
//   } catch (err) {
//     console.error('Error in getting coffee data - ' + err.message)
//     res.status(500).json({ error: 'Got error while getting Coffee data.' })
//   }
// }

// controller.createCoffee = async (req, res) => {
//   try {
//     const coffee = {
//       id: uuidv4(),
//       ...req.body
//     }

//     req.app.db.get('coffees').push(coffee).write()

//     res.send(coffee)
//   } catch (error) {
//     return res.status(500).send(error)
//   }
// }

export default controller
