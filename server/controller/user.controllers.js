import User from '../models/User.js'

export const getUsers = async (req, res) => {
  try{
     const users = await User.find()
      res.send(users)
  } catch(err){
      console.error(error.message);
      return res.satatus(500).json({message: err.message});
  }
}

export const createUser = async (req, res) => {
  try {
    const { username, password, mailito, calificacion, date, publica} = req.body;      
    const newUser = new User({ username, password, mailito, calificacion, date, publica })
    await newUser.save();       
    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try{
      const userRemoved = await User.findByIdAndDelete(req.params.id)
      if (!userRemoved) return res.sendStatus(404);
      return res.sendStatus(204);
  } catch(err){
      return res.satatus(500).json({message: err.message});
  }
}
