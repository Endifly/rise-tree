import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TopNavbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        height: 64,
        borderStyle: "none none solid none",
        borderWidth: 1,
      }}
      className="flex items-center"
    >
      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Upcomming ..." {...a11yProps(0)} />
        <Tab label="Forum" {...a11yProps(1)} />
      </Tabs> */}
      <Typography className="font-bold cursor-pointer">#Upcomming</Typography>
      <Box px={2} />
      <Typography className="font-bold cursor-pointer" color="GrayText">
        #Popular
      </Typography>
    </div>
  );
};

export default TopNavbar;
