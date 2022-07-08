import { Box } from "@mui/system";
import React from "react";
import { BaseChildren } from "types/style";
import Header from "./Header";
import TopNavbar from "./TopNavbar";

interface Props extends BaseChildren {}

const ClientLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="h-screen w-screen px-12"
      //   style={{ backgroundColor: "#fff4e2"
      style={{
        overflowX: "hidden",
      }}
    >
      <Header />
      <Box py={1} />
      <TopNavbar />
      <Box py={1} />
      <div>{children}</div>
    </div>
  );
};

export default ClientLayout;
