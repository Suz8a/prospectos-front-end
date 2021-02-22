import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "../../elements/card";
import { ModalContainer } from "./styled";
import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";

type FileUploaderProps = {
  onClickAceptar: (motivo: string) => void;
  onClickCancelar: () => void;
  open: boolean;
};

function ModalRechazo({
  onClickAceptar,
  onClickCancelar,
  open,
}: FileUploaderProps) {
  const [motivo, setMotivo] = useState("");

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setMotivo(e.target.value);
  }

  function cleanModal() {
    setMotivo("");
  }

  return (
    <Modal open={open}>
      <ModalContainer>
        <Card width="800px" height="auto" padding="20px">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                label="Motivo del Rechazo"
                variant="outlined"
                size="medium"
                onChange={(e) => onChange(e)}
                value={motivo}
                fullWidth
                multiline
                rows={6}
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
                    await onClickAceptar(motivo);
                    cleanModal();
                  }}
                  disabled={motivo.trim().length === 0}
                >
                  Aceptar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </ModalContainer>
    </Modal>
  );
}

export default ModalRechazo;
