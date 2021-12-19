import mongoose from 'mongoose'

const CoffeeSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    ingredients: [String],
    category: String
  },
  { collection: 'coffee' }
)

let CoffeesModel = mongoose.model('coffee', CoffeeSchema)

CoffeesModel.getById = async (id) => {
  return await CoffeesModel.findById(id).exec()
}

CoffeesModel.getAll = async () => {
  return CoffeesModel.find()
}

export default CoffeesModel
