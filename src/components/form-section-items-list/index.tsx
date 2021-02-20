import { Grid } from "@material-ui/core";
import React from "react";
import Line from "../../elements/line";
import Title from "../../elements/title";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FormSectionContainer from "../../elements/form-section-container";

function FormSectionItemsList() {
  return (
    <FormSectionContainer>
      <Grid container>
        <Grid item xs={9}>
          <Title text="Documentos" />
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" fullWidth>
            <AddIcon color="primary" />
            AGREGAR DOCUMENTO
          </Button>
        </Grid>
        <Line />
        <Grid item xs={12}>
          <div>list of items</div>
        </Grid>
      </Grid>
    </FormSectionContainer>
  );
}

export default FormSectionItemsList;
