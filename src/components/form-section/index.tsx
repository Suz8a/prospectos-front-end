import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Title from "../../elements/title";
import FormSectionContainer from "../../elements/form-section-container";

type FormSectionProps = {
  title: string;
  currentValues: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => void;
  requiredData: {
    id: string;
    title: string;
    required: boolean;
    type: string;
  }[];
};

function FormSection({
  title,
  requiredData,
  currentValues,
  onChange,
}: FormSectionProps) {
  return (
    <FormSectionContainer padding="0px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Title text={title} />
        </Grid>
        {requiredData.map(({ id, title, required, type }) => (
          <Grid item xs={4} key={id}>
            <TextField
              id={id}
              label={title}
              required={required}
              type={type}
              onChange={(e) => onChange(e, id)}
              value={currentValues[id]}
              variant="outlined"
              size="small"
              fullWidth={true}
            />
          </Grid>
        ))}
      </Grid>
    </FormSectionContainer>
  );
}

export default FormSection;
