import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "../../elements/card";
import { ModalContainer } from "./styled";
import { Button, Grid, TextField } from "@material-ui/core";
import Title from "../../elements/title";
import { useState } from "react";
import DropFileZone, { FileType } from "../../components/drop-file-area";

type FileUploaderProps = {
  onClickSubir: () => void;
  onClickCancelar: () => void;
};

function FileUploader({ onClickSubir, onClickCancelar }: FileUploaderProps) {
  const [name, setName] = useState("");
  const [items, setItems] = useState<FileType[]>([]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setName(e.target.value);
  }
  function onDelete(index: number) {
    console.log(index);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    console.log(items);
  }

  function onSetItems(items: FileType[]) {
    setItems(items);
    console.log(items);
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
          <Grid container spacing={5}>
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
              <DropFileZone
                items={items}
                onDelete={(index) => onDelete(index)}
                onSetItems={(items) => onSetItems(items)}
              />
            </Grid>
            <Grid container item spacing={3} justify="flex-end">
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick={() => onClickCancelar()}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => onClickSubir()}
                >
                  Subir
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </ModalContainer>
    </Modal>
  );
}

export default FileUploader;
