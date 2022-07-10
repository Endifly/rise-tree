import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Demo from "components/demo";
import ClientLayout from "layouts/clientLayout";
import Previewer from "components/Previewer";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import useTrees from "hooks/useTress";
import Slider from "components/Slider";
import LandingLayout from "layouts/LandingLayout";
import Lottie from "react-lottie";
import * as animationData from "public/90222-work-team.json";

const Home: NextPage = () => {
  const [ids, setIds] = useState(["1", "2", "3", "4", "5"]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ClientLayout>
      <div className="w-full" style={{ height: "calc(100vh - 80px - 80px)" }}>
        {/* <div className="grid grid-cols-2 h-full">
          <div className="col-span-1 flex flex-col justify-center h-full">
            <Typography variant="h4" className="font-bold">
              Start your Dream Team
            </Typography>
            <Box py={3} />
            <Typography variant="h4" className="font-bold">
              Find Great Teammates!
            </Typography>
          </div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div> */}
        <Box py={3} />
        <Lottie options={defaultOptions} height={256} width={256} />
        <Box py={3} />
        <Typography variant="h4" className="font-bold" align="center">
          Build your dream
        </Typography>
        <Box py={3} />
        {/* <Typography variant="h4" className="font-bold" align="center">
          Find Great Teammates!
        </Typography> */}
        <div className="flex justify-center">
          <Button variant="outlined" href="/event">
            Get starterd
          </Button>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Home;
