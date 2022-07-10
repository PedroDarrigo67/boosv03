import { createContext, useContext, useEffect, useState } from "react";
import {
  getUsersRequest,
  createUserRequest, 
  deleteUserRequest, 
} from "../api/users";


const userContext = createContext();


export const useUsers = () => {
  const context = useContext(userContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

useEffect(() => {
  (async () => {
    const res = await getUsersRequest();
    setUsers(res.data);
  })();
}, []);

const deleteUser = async (id) => {
  const res = await deleteUserRequest(id);
  if (res.status === 204) {
    setUsers(users.filter((user) => user._id !== id));
  }
};



const createUser = async (user) => {
  try {
    const res = await createUserRequest(user);
    setUsers([...users, res.data]);
  } catch (error) {
    console.error(error);
  }
};

  // value ponemos lo que compartimos.
  return (
    <userContext.Provider
      value={{ users, createUser, deleteUser }}
    >
      {children}
    </userContext.Provider>
  );
};