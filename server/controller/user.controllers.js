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
    const { username, password, calificacion, date} = req.body;      
    const newUser = new User({ username, password, calificacion, date})
    await newUser.save();       
    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
