import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  List,
} from "@material-ui/core";
import React, { ReactNode } from "react";
import Line from "../../elements/line";
import Title from "../../elements/title";
import Button from "@material-ui/core/Button";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FormSectionContainer from "../../elements/form-section-container";
import CancelIcon from "@material-ui/icons/Cancel";

type FormSectionItemsListProps = {
  buttonText: string;
  icon: ReactNode;
  items: any[];
};

function FormSectionItemsList({
  buttonText,
  icon,
  items,
}: FormSectionItemsListProps) {
  return (
    <FormSectionContainer>
      <Grid container>
        <Grid item xs={9}>
          <Title text="Documentos" />
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" fullWidth>
            {icon}
            {buttonText}
          </Button>
        </Grid>
        <Line />
        <Grid item xs={12}>
          <List>
            {items.map((item) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <InsertDriveFileIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="name" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <CancelIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </FormSectionContainer>
  );
}

export default FormSectionItemsList;