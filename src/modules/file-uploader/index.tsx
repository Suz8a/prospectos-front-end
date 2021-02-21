import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "../../elements/card";
import { ModalContainer } from "./styled";
import { Button, Grid, TextField } from "@material-ui/core";
import Title from "../../elements/title";
import { useState } from "react";
import DropFileZone, { FileType } from "../../components/drop-file-area";
import CircularProgress from "@material-ui/core/CircularProgress";

type FileUploaderProps = {
  onClickSubir: (item: FileType, name: string) => void;
  onClickCancelar: () => void;
  open: boolean;
  loading?: boolean;
};

function FileUploader({
  onClickSubir,
  onClickCancelar,
  open,
  loading,
}: FileUploaderProps) {
  const [name, setName] = useState("");
  const [items, setItems] = useState<FileType[]>([]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setName(e.target.value);
  }
  function onDelete(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  function onSetItems(items: FileType[]) {
    setItems(items);
  }

  function cleanModal() {
    setItems([]);
    setName("");
  }

  return (
    <Modal open={open}>
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
                  onClick={() => {
                    onClickCancelar();
                    cleanModal();
                  }}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={async () => {
                    await onClickSubir(items[0], name);
                    cleanModal();
                  }}
                  disabled={
                    items.length === 0 || name.trim().length === 0 || loading
                  }
                >
                  {loading ? <CircularProgress size={"25px"} /> : "Subir"}
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
