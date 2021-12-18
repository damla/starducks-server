import { v4 as uuidv4 } from 'uuid'

// uuidv4()
// uuid.parse(str)

const controller = {}

controller.getCoffee = async (req, res) => {
  res.status(200).json('test coffee')
}

export default controller
