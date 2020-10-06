import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { addTestResult } from "../controllers/addTestResult";

const HippoInfo = ({ hippo, testResults }) => {
  const [result, setResult] = useState("");

  const renderTestResult = (hippo) => {
    let output;
    testResults.forEach((result) => {
      const parsedHippoId = result?.resource?.subject?.reference?.split("/")[1];

      if (result.patient_id === hippo.id) {
        output = result?.resource?.valueCodeableConcept?.text;
      } else if (parsedHippoId === hippo.id) {
        output = result?.resource?.code;
      }
    });

    if (output) {
      return output;
    } else {
      return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={result}
          onChange={(e) => {
            setResult(e.target.value);
            addTestResult({
              resourceType: "Observation",
              code: e.target.value,
              subject: { reference: `Patient/${hippo.id}` },
            });
          }}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={"Positive for Hippo Virus"}>
            Positive for Hippo Virus
          </MenuItem>
          <MenuItem value={"Negative for Hippo Virus"}>
            Negative for Hippo Virus
          </MenuItem>
          <MenuItem value={"Inconclusive result for Hippo Virus"}>
            Inconclusive result for Hippo Virus
          </MenuItem>
        </Select>
      );
    }
  };

  return (
    <TableRow key={hippo.id}>
      <TableCell scope="row">
        {hippo?.resource?.name?.map((n) => {
          return n.given;
        })}
      </TableCell>
      <TableCell align="right">{renderTestResult(hippo)}</TableCell>
      <TableCell align="right">
        {new Date(hippo.updated_at).toISOString().split("T")[0]}
      </TableCell>
    </TableRow>
  );
};

export default HippoInfo;
