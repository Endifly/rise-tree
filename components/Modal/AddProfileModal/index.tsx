import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  Slide,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import useLogo from "hooks/useLogo";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "@mui/icons-material/Image";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { addRoot } from "utils/string";
import useTags from "hooks/useTags";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const now = new Date();
const tomorrow = new Date().setDate(now.getDate() + 1);

const CreateProfileModal: React.FC<Props> = ({ open, handleClose }) => {
  const { loading, logo } = useLogo();
  const [profileTags] = useTags();
  const theme = useTheme();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [banner, setBanner] = useState<File | null>(null);
  const [startAt, setStartAt] = React.useState<Date | null>(new Date());
  const [endAt, setEndAt] = React.useState<Date | null>(new Date(tomorrow));
  const [tags, setTags] = useState<Array<string>>([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    setBanner(acceptedFiles[0]);
  }, []);

  const DragZone = (isDragActive: boolean) => {
    if (banner !== null)
      return (
        <img src={URL.createObjectURL(banner)} style={{ height: "100%" }} />
      );
    if (isDragActive) return <AddPhotoAlternateIcon style={{ fontSize: 96 }} />;
    if (!isDragActive) return <ImageIcon style={{ fontSize: 96 }} />;
  };

  const onSubmit = async () => {
    if (!banner) return;

    const data: any = {};
    const formData = new FormData();

    data["username"] = name;
    data["desc"] = desc;
    data["tags"] = startAt?.toISOString();

    formData.append("data", JSON.stringify(data));

    formData.append(`files.avatar`, banner, banner.name);

    await fetch(addRoot("/profiles"), {
      method: "post",
      body: formData,
    });

    handleClose();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
      maxWidth="xs"
      fullWidth
      scroll="body"
      fullScreen={isMobile}
    >
      <DialogContent>
        <Box py={1} />
        <Typography variant="h6" className="font-bold" align="center">
          เราอยากรู้จักคุณมากขึ้น
        </Typography>
        <Box py={1} />
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setBanner(null)}
        >
          <Typography className="font-bold">Avatar ของคุณ</Typography>
          {banner && <Typography className="font-bold">ลบ</Typography>}
        </div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            className="flex justify-center border items-center"
            style={{ height: 195 }}
          >
            {DragZone(isDragActive)}
          </div>
        </div>

        <Box py={2} />

        <Typography className="font-bold">username</Typography>
        <Box py={1} />
        <TextField
          placeholder="name"
          fullWidth
          multiline
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Box py={2} />

        <Typography className="font-bold">อะไรบ่งบอกความเป็นคุณบ้าง</Typography>
        <Box py={1} />
        {profileTags?.tags.map((tag) => (
          <Chip label={tag} key={tag} variant="outlined" className="mr-2" />
        ))}

        {/* <Box py={2} /> */}
        {/* 
          <Typography className="font-bold">Event ของคุณจัดเมื่อไร</Typography>
          <Box py={1} /> */}
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} fullWidth />}
              label="เวลา เริ่ม"
              value={startAt}
              onChange={(newValue) => {
                setStartAt(newValue);
              }}
            />
            <Box py={1} />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} fullWidth />}
              label="เวลา จบ"
              value={endAt}
              onChange={(newValue) => {
                setEndAt(newValue);
              }}
            />
          </LocalizationProvider> */}

        <Box py={2} />

        <Button fullWidth variant="outlined" onClick={onSubmit}>
          Create Profile
        </Button>

        <Box py={2} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateProfileModal;
