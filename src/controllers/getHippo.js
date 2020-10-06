import axios from "axios";

export const getHippo = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:9000/hippo/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
