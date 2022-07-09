import { Chip, Typography } from "@mui/material";
import ClientLayout from "layouts/clientLayout";
import { useState } from "react";

interface infoType {}

const ForumPage = () => {
  const [tags, setTags] = useState(["hackathon", "blockchain"]);

  const ListPerson = () => {
    return (
      <div className="py-4 mt-4 border-b">
        <Typography>Tanakorn Tampanya</Typography>
        <div className="mt-4">
          <Chip label="#hackathon" />
        </div>
      </div>
    );
  };

  return (
    <ClientLayout>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="flex">
            {tags.map((tag) => (
              <Chip label={`#${tag}`} key={tag} className="mr-2" />
            ))}
          </div>
          {ListPerson()}
        </div>
        <div className="col-span-1">
          <Typography variant="h6" className="font-bold">
            Favorite
          </Typography>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ForumPage;
