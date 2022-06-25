import mongoose from "mongoose";

const userSchema = new mongoose.Schema({


  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  calificacion: Number,
  date: { type: Date, default: new Date() }, 
  timestamps: true
})

export default mongoose.model('User', userSchema)
