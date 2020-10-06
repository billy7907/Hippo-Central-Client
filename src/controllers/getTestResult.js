import axios from "axios";

export const getTestResult = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:9000/testresult/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};