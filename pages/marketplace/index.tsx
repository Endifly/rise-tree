import { Typography } from "@mui/material";
import useTrees from "hooks/useTress";
import ClientLayout from "layouts/clientLayout";

const MarketplacePage = () => {
  const trees = useTrees();

  console.log(trees);

  return (
    <ClientLayout>
      <Typography>marketplace</Typography>
    </ClientLayout>
  );
};

export default MarketplacePage;
