import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "../../elements/card";
import { ModalContainer } from "./styled";
import { Grid, TextField } from "@material-ui/core";
import Title from "../../elements/title";
import { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import { DropzoneArea } from "material-ui-dropzone";

type FileUploaderProps = {};

function FileUploader() {
  const [name, setName] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setName(e.target.value);
  }

  function handleChange(files: File[]) {
    setFiles(files);
  }

  return (
    <Modal
      open={true}
      onClose={() => {}}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalContainer>
        <Card width="800px" height="auto" padding="20px">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Title text="Subir archivo" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nombre del archivo"
                variant="outlined"
                size="small"
                onChange={(e) => onChange(e)}
                value={name}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <DropzoneArea
                onChange={(files) => handleChange(files)}
                showPreviews={true}
                showPreviewsInDropzone={false}
                useChipsForPreview
                previewText="Selected files"
              />
            </Grid>
          </Grid>
        </Card>
      </ModalContainer>
    </Modal>
  );
}

export default FileUploader;
