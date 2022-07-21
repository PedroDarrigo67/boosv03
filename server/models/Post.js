import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
        nombre:{ type: String, required: true, trim: true },
        detalle: { type: String,  trim: true },
        direccion: { type: String,  trim: true },
        altura: { type: String, trim: true },
        barrio: { type: String,  trim: true },
        ambientes: { type: String, trim: true },
        precio: { type: Number  },
        moneda: { type: String },
        habilitada: {  type: String, default: "pre" },
        plantas: { type: String, trim: true },
        habitaciones: {type: String, trim: true},
        banos: { type: String, trim: true },
        metrosconstruidos: { type: String, trim: true},
        metrosterreno: { type: String, trim: true },
        tipo: { type: String, trim: true },
        expensas: { type: Number  },
        antiguedad: { type: String, trim: true },        
        image:{ url: String, public_id: String}, 
        imagea:{ url: String, public_id: String},     
        imageb:{ url: String, public_id: String},    
        imagec:{ url: String, public_id: String},
        imaged:{ url: String, public_id: String},         
        imagee:{ url: String, public_id: String}, 
        imagef:{ url: String, public_id: String},
        imageg:{ url: String, public_id: String},         
        imageh:{ url: String, public_id: String},
        usuario :{ type: String, trim: true},  
        date: { type: Date, default: Date.now}       
    }, {
        timestamps: true
  });

export default mongoose.model('Post', postSchema)
