import Post from '../models/Post.js'
import {uploadImage, deleteImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getPosts = async (req, res) => {
    try{
       const posts = await Post.find()
        res.send(posts)
    } catch(err){
        console.error(error.message);
        return res.satatus(500).json({message: err.message});
    }
}

export const createPost = async (req, res) => {
    try {
      const { nombre, detalle, direccion, altura, barrio, ambientes, precio, 
        moneda, habilitada, plantas, habitaciones, banos, metrosconstruidos, metrosterreno, 
        tipo, usuario, expensas, antiguedad} = req.body; 
        let image, imagea, imageb, imagec, imaged, imagee, imagef, 
        imageg, imageh

        if (req.files.image) {
            const result = await uploadImage(req.files.image.tempFilePath) 
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }      
        }

        if (req.files.imagea) {
            const result = await uploadImage(req.files.imagea.tempFilePath) 
            await fs.remove(req.files.imagea.tempFilePath)
            imagea = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }

        if (req.files.imageb) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }
       

        if (req.files.imagec) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }

        if (req.files.imaged) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }

        if (req.files.imagee) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }

        if (req.files.imagef) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }

        if (req.files.imageg) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }

        if (req.files.imageh) {
            const result = await uploadImage(req.files.imagec.tempFilePath) 
            await fs.remove(req.files.imagec.tempFilePath)
            imagec = {
                url: result.secure_url,
                public_id: result.public_id
            }          
        }
        
        

      const newPost = new Post({nombre, detalle, direccion, altura, barrio, ambientes, precio, 
        moneda, habilitada, plantas, habitaciones, banos, metrosconstruidos, metrosterreno, 
        tipo, usuario, expensas, antiguedad, image, imagea, imageb, imagec, imaged, imagee, imagef, 
        imageg, imageh})

       

      await newPost.save();       
      return res.json(newPost);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const updatePost = async (req, res) => {
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.send(updatePost);
    } catch (err){
        return res.satatus(500).json({message: err.message});
    }
};



    export const deletePost = async (req, res) => {
        try{
            const postRemoved = await Post.findByIdAndDelete(req.params.id)
            if (!postRemoved) return res.sendStatus(404);

                if(postRemoved.image.public_id) {
                    await deleteImage(postRemoved.image.public_id)
                }
            return res.sendStatus(204);
        } catch(err){
            return res.satatus(500).json({message: err.message});
        }
    }

    export const getPost = async (req, res) => {
        try{
            const post = await Post.findById(req.params.id);
        if (!post) return res.sendStatus(404);
        return res.json(post);
        } catch(err){
            return res.satatus(500).json({message: err.message});
        }
    };