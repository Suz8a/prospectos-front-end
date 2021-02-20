import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "../../elements/card";
import { ModalContainer } from "./styled";
import { Grid, TextField } from "@material-ui/core";
import Title from "../../elements/title";
import { useState } from "react";
import DropFileZone from "../../components/drop-file-area";

function FileUploader() {
  const [name, setName] = useState("");

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setName(e.target.value);
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
              <DropFileZone />
            </Grid>
          </Grid>
        </Card>
      </ModalContainer>
    </Modal>
  );
}

export default FileUploader;
