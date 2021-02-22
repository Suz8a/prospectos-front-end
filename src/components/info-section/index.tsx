import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Title from "../../elements/title";
import FormSectionContainer from "../../elements/form-section-container";

type InfoSectionProps = {
  title: string;
  data: {
    title: string;
    value: string | undefined;
  }[];
};

function InfoSection({ title, data }: InfoSectionProps) {
  return (
    <FormSectionContainer padding="0px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Title text={title} />
        </Grid>
        {data.map(({ title, value }, index) => (
          <Grid item xs={4} key={index}>
            <TextField
              label={title}
              value={value}
              variant="outlined"
              size="small"
              fullWidth={true}
              InputProps={{
                readOnly: true,
              }}
              tabIndex={-1}
              style={{ userSelect: "none" }}
            />
          </Grid>
        ))}
      </Grid>
    </FormSectionContainer>
  );
}

export default InfoSection;
