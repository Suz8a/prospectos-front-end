import { Grid } from "@material-ui/core";
import React from "react";
import Line from "../../elements/line";
import Title from "../../elements/title";

function FormSectionItemsList() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Title text="Documentos" />
      </Grid>
      <Grid item xs={12}>
        <Line />
      </Grid>
      <Grid container item xs={12}>
        <div>list of items</div>
      </Grid>
    </Grid>
  );
}

export default FormSectionItemsList;
