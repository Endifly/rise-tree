import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Demo from "components/demo";
import ClientLayout from "layouts/clientLayout";
import Previewer from "components/Previewer";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import useTrees from "hooks/useTress";
import Slider from "components/Slider";
import LandingLayout from "layouts/LandingLayout";

const Home: NextPage = () => {
  const [ids, setIds] = useState(["1", "2", "3", "4", "5"]);
  const trees = useTrees();

  console.log(trees);

  return (
    <LandingLayout>
      <div className="w-full" style={{ height: "calc(100vh - 80px)" }}>
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-1 flex flex-col justify-center h-full">
            <Typography variant="h4" className="font-bold">
              Start your Dream Team
            </Typography>
            <Box py={2} />
            <Typography variant="h4" className="font-bold">
              Find Great Teammates!
            </Typography>
          </div>
          <div className="col-span-1">asd</div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Home;
