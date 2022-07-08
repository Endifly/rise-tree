import { Chip } from "@mui/material";
import ClientLayout from "layouts/clientLayout";
import { useState } from "react";

const ForumPage = () => {
  const [tags, setTags] = useState(["hackathon", "blockchain"]);

  return (
    <ClientLayout>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="flex">
            {tags.map((tag) => (
              <Chip label={`#${tag}`} key={tag} className="mr-2" />
            ))}
          </div>
        </div>
        <div className="col-span-1">fav</div>
      </div>
    </ClientLayout>
  );
};

export default ForumPage;
