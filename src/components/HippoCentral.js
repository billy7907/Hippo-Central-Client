import React, { useEffect, useState } from "react";
import { getAllHippos } from "../controllers/getAllHippos";
import { addHippo } from "../controllers/addHippo";
import { getTestResults } from "../controllers/getTestResults";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Input } from "@material-ui/core";
import HippoInfo from "./HippoInfo";
import "./index.scss";

const HippoCentral = () => {
  const [hippos, setHippos] = useState([]);
  const [hippoName, setHippoName] = useState("");
  const [testResults, setTestResults] = useState([]);

  const getHippos = () => {
    getAllHippos()
      .then((res) => {
        setHippos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getHippoTestResults = () => {
    getTestResults()
      .then((res) => {
        setTestResults(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHippos();
    getHippoTestResults();
  }, []);

  return (
    <div className="hippo-central">
      <h1>Hippo Central</h1>
      <iframe
        title="hippo-gif"
        src="https://giphy.com/embed/2DRSlLXPBiKvC"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <Input
        value={hippoName}
        type="text"
        placeholder="Add hippo's name"
        onChange={(e) => {
          setHippoName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addHippo(hippoName, () => {
              getHippos();
              setHippoName("");
            });
          }
        }}
      ></Input>

      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hippo Name</TableCell>
              <TableCell align="right">Test Result</TableCell>
              <TableCell align="right">Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hippos.map((hippo) => (
              <HippoInfo
                key={hippo.id}
                hippo={hippo}
                testResults={testResults}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HippoCentral;
