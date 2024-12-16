import PropTypes from "prop-types";

// material-ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Typography from "@mui/material/Typography";
import UploadCover from 'assets/images/upload/upload.svg';
import CardMedia from '@mui/material/CardMedia';

// third-party
import { useDropzone } from "react-dropzone";

// project import
import RejectionFiles from "./RejectionFile";
import PlaceholderContent from "./PlaceHolderContent";

const DropzoneWrapper = styled("div")(({ theme }) => ({
  outline: "none",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("padding"),
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.secondary.main}`,
  "&:hover": { opacity: 0.72, cursor: "pointer" },
}));

// ==============================|| UPLOAD - SINGLE FILE ||============================== //

const SingleFileUpload = ({ error, file, setFieldValue, sx }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    accept: {
      "text/html": [".json"],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFieldValue(
        "files",
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs =
    file &&
    file.map((item, index) => (
        <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction={{ xs: 'column', md: 'row' }}
        sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
    >
        <CardMedia component="img" image={UploadCover} sx={{ width: 150 }} />
        <Stack sx={{ p: 3 }} spacing={1}>
            <Typography variant="h5">{item.name}</Typography>
        </Stack>
    </Stack>
    ));

  const onRemove = () => {
    setFieldValue("files", null);
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <DropzoneWrapper
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: "error.main",
            borderColor: "error.light",
            bgcolor: "error.lighter",
          }),
          
        }}
      >
        <input {...getInputProps()} />
        
        {!file && <PlaceholderContent />}
        {thumbs}
      </DropzoneWrapper>

      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}

      {file && file.length > 0 && (
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          sx={{ mt: 1.5 }}
        >
          <Button variant="contained" color="error" onClick={onRemove}>
            Remove
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Upload
          </Button>
        </Stack>
      )}
    </Box>
  );
};

SingleFileUpload.propTypes = {
  setFieldValue: PropTypes.func,
  sx: PropTypes.object,
  error: PropTypes.string,
  file: PropTypes.array,
};

export default SingleFileUpload;
