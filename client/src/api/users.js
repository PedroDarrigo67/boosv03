import axios from "axios";

export const getUsersRequest = async () => await axios.get("/users");

export const deleteUserRequest = async (id) =>
  await axios.delete("/users/" + id);

  export const createUserRequest = async (user) => {
    const form = new FormData();
    for (let key in user) {
      form.append(key, user[key]);
    }
    return await axios.post("/users", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };



