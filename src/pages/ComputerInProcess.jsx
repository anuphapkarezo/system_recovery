//* Computer in process page component *//
import "./styles/ComputerInProcess.css";
import Navbar from "../components/Navbar/Navbar";

import DonutChart from "../components/charts/ComputerInProcessDonutChart";
import BarChart from "../components/charts/ComputerInProcessBarCharts";

import { useState, useEffect } from "react";

//*mui imports //

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import axios from "axios";
import Container from "@mui/material/Container";
import Computer_In_Process_Search_Group from "../components/SearchGroup/computer_in_process_search";

export default function ComputerInProcess() {
  const [selecteddivision, setSelecteddivision] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCostCenter, setSelectedCostCenter] = useState(null);

  console.log("selecteddivision" , selecteddivision);
  console.log("selectedDepartment" , selectedDepartment);
  console.log("selectedCostCenter" , selectedCostCenter);

  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        <Box>
          <div >
            {/* <Computer_In_Process_Search_Group onSearch={onSearch} /> */}
            <Computer_In_Process_Search_Group
                onSearch={(queryParams) => {
                  setSelecteddivision(queryParams.division);
                  setSelectedDepartment(queryParams.Department);
                  setSelectedCostCenter(queryParams.Cost_center);
                }}
            />
          </div>
        </Box>
      </Container>
    </>
  );
}
