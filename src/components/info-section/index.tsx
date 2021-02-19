import React from "react";
import { SectionTitle, SectionContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
    <SectionContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SectionTitle>{title}</SectionTitle>
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
            />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}

export default FormSection;
