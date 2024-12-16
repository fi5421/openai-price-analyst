// project imports
import MainCard from "ui-component/cards/MainCard";
import { Formik } from "formik";
import * as yup from "yup";
import UploadSingleFile from "ui-component/third-party/dropzone/SingleFile";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Charts from "./Charts";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

const MainPage = () => {
  const [fileContent, setFileContent] = useState(null);

  const handleSubmit = (values) => {
    console.log(values.files);
    if (values.files) {
      const file = values.files[0];
      console.log(file);

      // Check if the file is a .json fil
      if (file.type === "application/json" || file.name.endsWith(".json")) {
        const reader = new FileReader();

        reader.onload = (event) => {
          try {
            setFileContent(JSON.parse(event.target.result));
            console.log("JSON file content:", fileContent);

            // Additional processing logic can go here
          } catch (error) {
            console.error("Invalid JSON file:", error);
            alert("The uploaded file is not a valid JSON.");
          }
        };

        reader.onerror = () => {
          console.error("Error reading the file.");
          alert("Failed to read the file.");
        };

        reader.readAsText(file); // Read the file as text
      } else {
        alert("Please upload a valid JSON file.");
      }
    }
  };

  return (
    <div>
      {fileContent === null ? (
        <MainCard>
          <MainCard title="Upload Single File">
            <Formik
              initialValues={{ files: null }}
              onSubmit={(values) => {
                handleSubmit(values);
                console.log(values);
              }} // Call handleSubmit on form submit
              validationSchema={yup.object().shape({
                files: yup.mixed().required("Avatar is a required."),
              })}
            >
              {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Stack spacing={1.5} alignItems="center">
                        <UploadSingleFile
                          setFieldValue={setFieldValue}
                          file={values.files}
                          error={touched.files && !!errors.files}
                        />
                      </Stack>
                      {touched.files && errors.files && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-password-login"
                        >
                          {errors.files}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </MainCard>
        </MainCard>
      ) : (
        <Charts data={fileContent} />
      )}
    </div>
  );
};

export default MainPage;
