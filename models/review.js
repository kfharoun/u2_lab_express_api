const { Schema } = require('mongoose')

const ReviewSchema = new Schema(
  {
    score: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    movie: {type: Schema.Types.ObjectId, ref: `Movie`}
  },
  { timestamps: true }
)

module.exports = ReviewSchema