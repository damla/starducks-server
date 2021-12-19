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

controller.create = async (req, res) => {
  const newCoffee = new Coffee(req.body)

  try {
    const coffee = await newCoffee.save()

    if (!coffee) res.status(400).json('Invalid Input')
    else res.status(201).json(coffee)
  } catch (err) {
    console.error('Error in getting coffee data - ' + err.message)
    res.status(400).json({ error: 'Invalid Input' })
  }
}

controller.getById = async (req, res) => {
  try {
    let coffee = await Coffee.getById(req.params.id)

    if (!coffee) res.status(404).json('Resource Not Found')
    else res.status(200).json(coffee)
  } catch (err) {
    res.status(500).json({ error: 'Invalid id' })
  }
}

controller.delete = async (req, res) => {
  try {
    let coffee = await Coffee.findByIdAndDelete(req.params.id)

    if (!coffee) res.status(404).json('Not Found')
    else res.status(200).json({ success: true })
  } catch (err) {
    res.status(404).json({ error: 'Invalid id' })
  }
}

controller.update = async (req, res) => {
  try {
    let coffee = await Coffee.findByIdAndUpdate(req.params.id, req.body)

    if (!coffee) res.status(404).json('Not Found')
    else res.status(200).json('Default response')
  } catch (err) {
    res.status(400).json({ error: 'Invalid Input' })
  }
}

export default controller
