import axios from "axios";

export const getTestResults = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9000/testresult")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
