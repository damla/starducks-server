import { v4 as uuidv4 } from 'uuid'
import JSONdb from 'simple-json-db'
const db = new JSONdb('./utils/db/db.json')
// uuidv4()
// uuid.parse(str)

const controller = {}

controller.getCoffee = async (req, res) => {
  try {
    const coffees = db.get('coffees')

    if (coffees && coffees.length <= 0) {
      res.status(404).json('Coffee list not found.')
    } else {
      res.status(200).json(coffees)
    }
  } catch (err) {
    console.error('Error in getting brands data - ' + err.message)
    res.status(500).json({ error: 'Got error while getting Coffee list data.' })
  }
}

export default controller
