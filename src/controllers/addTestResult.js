import axios from "axios";

export const addTestResult = (testresult, cb) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:9000/testresult`, testresult)
      .then((res) => {
        resolve(res.data);
        cb();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
