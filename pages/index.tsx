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

const Home: NextPage = () => {
  const [ids, setIds] = useState(["1", "2", "3", "4", "5"]);
  const trees = useTrees();

  console.log(trees);

  return (
    <ClientLayout>
      <Typography variant="h6" className="font-bold">
        Rise
      </Typography>
      <Box py={1} />
      <div className="flex">
        {ids.map((id) => (
          <Previewer className="mx-2" key={`1-${id}`} />
        ))}
      </div>

      <Box py={4} />

      <Typography variant="h6" className="font-bold">
        DevMountian
      </Typography>
      <Box py={1} />
      <div className="flex">
        {ids.map((id) => (
          <Previewer className="mx-2" key={`2-${id}`} />
        ))}
      </div>

      <Box py={4} />
    </ClientLayout>
  );
};

export default Home;
