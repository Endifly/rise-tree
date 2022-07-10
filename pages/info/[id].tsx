import { Box, Chip, Typography } from "@mui/material";
import useUser from "hooks/userUser";
import ClientLayout from "layouts/clientLayout";
import { useRouter } from "next/router";
import { addRoot } from "utils/string";

interface TopicProps {
  title: string;
  value: string;
}

const Topic: React.FC<TopicProps> = ({ title, value }) => {
  return (
    <div>
      <Typography className="font-bold">{title}</Typography>
      <Typography>{value}</Typography>
    </div>
  );
};

const InfoPage = () => {
  const router = useRouter();
  const { id: _id } = router.query;
  const id = typeof _id === "string" ? _id : "";

  const [user] = useUser(id);

  return (
    <ClientLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        <div className="col-span-1 ">
          <div className="w-full rounded-xl overflow-hidden">
            <img src={addRoot(user?.avatar.url)} className="h-full w-full" />
          </div>

          <Box py={1} />

          <Typography variant="subtitle1" color="GrayText">
            username
          </Typography>
          <Typography variant="h6" className="font-bold">
            {user?.username}
          </Typography>

          <Box py={1} />

          <Typography variant="subtitle1" color="GrayText">
            สนใจใน
          </Typography>
          <Typography variant="h6" className="font-bold">
            {user?.tags.map((tag) => (
              <Chip label={tag} key={tag} className="mr-2" />
            ))}
          </Typography>

          <Box py={1} />

          <Typography variant="subtitle1" color="GrayText">
            role
          </Typography>
          <Typography variant="h6" className="font-bold">
            student
          </Typography>

          <Box py={1} />

          <Typography variant="subtitle1" color="GrayText">
            skill
          </Typography>
          <Typography variant="h6" className="font-bold">
            python, react, golang
          </Typography>
        </div>
        <div className="col-span-4">
          <Typography variant="h6" className="font-bold">
            Archivement
          </Typography>
          <Box pt={1} />
          <div className="grid grid-cols-6 bg-gray-200 p-4 rounded-2xl">
            <Topic title="จำนวนเข้าร่วม" value="0" />
            <Topic title="จำนวนไอเดีย" value="2" />
            <Topic title="จำนวนรางวัล" value="3" />
            <Topic title="..." value="." />
            <Topic title="..." value="." />
            <Topic title="..." value="." />
          </div>
          <Box py={2} />
          <div>
            <Typography variant="h6" className="font-bold">
              ประวัติการเข้าร่วม hackathon
            </Typography>
            <Box pt={1} />
            <Typography color="GrayText">ยังไม่มีประวัติในตอนนี้</Typography>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default InfoPage;
