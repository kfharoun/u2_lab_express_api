const { Schema } = require('mongoose')

const ActorSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    characterName: {type: String, required: true},
    age: {type: Number, required: true},
    died: {type: Boolean, required: true},
    movie: {type: Schema.Types.ObjectId, ref: `Movie`}
  },
  { timestamps: true }
)

module.exports = ActorSchema