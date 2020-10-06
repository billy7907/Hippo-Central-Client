import axios from "axios";

export const addHippo = (hippo, cb) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:9000/hippo`, {
        name: [{ given: [hippo] }],
        resourceType: "Patient",
      })
      .then((res) => {
        resolve(res.data);
        cb()
      })
      .catch((err) => {
        reject(err);
      });
  });
};
