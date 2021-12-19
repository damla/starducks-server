import Coffee from '../models/coffee.model.js'

const controller = {}

controller.getAll = async (req, res) => {
  try {
    // pull data from db
    let coffees = await Coffee.getAll()

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

    // send data pulled from db
    if (!coffee) res.status(404).json('Coffee data does not exist.')
    else res.status(200).json(coffee)
  } catch (err) {
    console.error('Error in getting coffee data - ' + err.message)
    res.status(500).json({ error: 'Got error in getById controller of coffee' })
  }
}

export default controller
