import React, { useEffect, useState } from "react";
import ApexColumnChart from "./ApexColumnChart";
import MainCard from "ui-component/cards/MainCard";
import SubCard from "ui-component/cards/SubCard";
import ApexAreaChart from "./ApexAreaChart";
import { gridSpacing } from "store/constant";
import Grid from "@mui/material/Grid";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function projectTotal(data) {
  let projects = [];
  let projectCumulative = {};

  for (let i = 0; i < data.length; i++) {
    if (!projects.includes(data[i].project_name)) {
      projects.push(data[i].project_name);
    }

    let cost = parseFloat(data[i].cost_in_major);
    if (!(data[i].project_name in projectCumulative)) {
      projectCumulative[data[i].project_name] = cost;
    } else {
      projectCumulative[data[i].project_name] += cost;
    }
  }

  let orderCosts = [];
  for (let i = 0; i < projects.length; i++) {
    orderCosts.push(projectCumulative[projects[i]]);
  }

  return [projects, orderCosts];
}

function projectBreakdown(dataArray) {
  const result = {};

  dataArray.forEach((item) => {
    const { project_name, timestamp, cost_in_major } = item;
    const datetime = new Date(Number(timestamp) * 1000).toISOString();

    if (!result[project_name]) {
      result[project_name] = [];
    }

    // Check if the timestamp already exists in the project's array
    const existingEntry = result[project_name].find(
      (entry) => entry[0] === datetime
    );

    if (existingEntry) {
      // If the timestamp exists, add the cost to the existing entry
      existingEntry[1] += parseFloat(cost_in_major);
    } else {
      // Otherwise, add a new entry with the timestamp and cost
      result[project_name].push([datetime, parseFloat(cost_in_major)]);
    }
  });

  return result;
}

const top100Films = [
  { label: "The Dark Knight", id: 1 },
  { label: "Control with Control", id: 2 },
  { label: "Combo with Solo", id: 3 },
  { label: "The Dark", id: 4 },
  { label: "Fight Club", id: 5 },
  { label: "demo@company.com", id: 6 },
  { label: "Pulp Fiction", id: 7 },
];

function Charts({ data }) {
  // State to hold project list and project cost
  const [projectList, setProjectList] = useState([]);
  const [projectCost, setProjectCost] = useState([]);
  const [projectBreakdownDict, setprojectBreakdownDict] = useState({});
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [projectsToDisplay, setProjectsToDisplay]= useState({});

  useEffect(() => {
    if (data?.data) {
      try {
        const result = projectTotal(data.data);
        const projectWiseCost = projectBreakdown(data.data);

        const [projects, orderCosts] = result;
        setProjectList(projects);
        setProjectCost(orderCosts);
        setprojectBreakdownDict(projectWiseCost);
        let options = []
        for (let i=0; i<projects.length; i++){
            options.push([i,projects[i]]);
        }
        options.push([projectList.length, "All"])
        setSelectedProjects(options);
        setProjectsToDisplay(projectWiseCost);
      } catch (error) {
        console.error("Error in projectWise:", error);
      }
    }
  }, [data]);

  const handleChange = (event) => {
    console.log(event.target)
    if (event.target.value==="All"){
        setProjectsToDisplay(projectBreakdownDict);
    }else{
        console.log(projectBreakdownDict);
        setProjectsToDisplay({[event.target.value]: projectBreakdownDict[event.target.value]});
    }
  };

  return (
    <div>
      {projectList && projectCost ? (
        <div>
          <MainCard title="Projects">
            <ApexColumnChart columns={projectList} data={projectCost} />
          </MainCard>
          <MainCard title="Project Wise Costs">
            <Grid container spacing={gridSpacing}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel id="simple-select-label">
                    Choose a Project
                  </InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    label="Choose a Project"
                    onChange={handleChange}
                  >
                    {selectedProjects.map(([value,option]) => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} rowSpacing={3}>
                {Object.entries(projectsToDisplay).map(
                  ([projectName, entries]) => (
                    <Grid item>
                      <SubCard title={projectName}>
                        <ApexAreaChart data={entries} />
                      </SubCard>
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </MainCard>
        </div>
      ) : (
        <div>Loading chart data...</div>
      )}
    </div>
  );
}

export default Charts;
