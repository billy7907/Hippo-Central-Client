import axios from "axios";

export const getAllHippos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9000/hippo")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
