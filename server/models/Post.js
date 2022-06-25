import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
        nombre:{ type: String, required: true, trim: true },
        detalle: { type: String, required: true, trim: true },
        direccion: { type: String, required: true, trim: true },
        altura: { type: String, required: true, trim: true },
        barrio: { type: String, required: true, trim: true },
        ambientes: { type: String, required: true, trim: true },
        precio: { type: Number, required: true },
        moneda: { type: String, required: true},
        habilitada: {  type: Boolean, default: true },
        plantas: { type: String, trim: true },
        habitaciones: {type: String, trim: true},
        banos: { type: String, trim: true },
        metrosconstruidos: { type: String, trim: true},
        metrosterreno: { type: String, trim: true },
        tipo: { type: String, trim: true },
        image:{ url: String, public_id: String}, 
        usuario: {type: String},  
        date: { type: Date, default: Date.now}       
    }, {
        timestamps: true
  });

export default mongoose.model('Post', postSchema)
