import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/paytm")

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowecase: true,
    minLength: 3,
    maxLength: 30,

  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 30,

  },

  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  }
})

export const User = mongoose.model("User", userSchema);
const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  }
})

export const Account = mongoose.model("Account", accountSchema)

