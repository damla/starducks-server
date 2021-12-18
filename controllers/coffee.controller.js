import { v4 as uuidv4 } from 'uuid'
import JSONdb from 'simple-json-db'
const db = new JSONdb('./utils/db/db.json')
// uuidv4()
// uuid.parse(str)

const controller = {}

controller.getCoffee = async (req, res) => {
  const coffees = db.get('coffees')
  res.status(200).json(coffees)
}

export default controller
