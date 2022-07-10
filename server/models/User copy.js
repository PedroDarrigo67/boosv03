import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
      username: {type: String, required: true, unique: true, trim: true},
      password: { type: String, required: true },
      mailito: {type: String, required: true, unique: true, trim: true},
      calificacion: Number,
      date: { type: Date, default: new Date() },
      publica : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Post'}
    ] 

  }, {
      timestamps: true
  });

export default mongoose.model('User', userSchema)