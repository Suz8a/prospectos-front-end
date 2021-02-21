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
import FileUploader from "../../modules/file-uploader";

type FormSectionItemsListProps = {
  buttonText: string;
  icon: ReactNode;
  items: string[];
  padding?: string;
  onDeleteItem: (name: number) => void;
  onButtonClick: () => void;
};

function FormSectionItemsList({
  buttonText,
  icon,
  items,
  padding,
  onDeleteItem,
  onButtonClick,
}: FormSectionItemsListProps) {
  return (
    <FormSectionContainer padding={padding}>
      <FileUploader onClickSubir={() => {}} onClickCancelar={() => {}} />
      <Grid container>
        <Grid item xs={9}>
          <Title text="Documentos" />
        </Grid>
        <Grid item xs={3}>
          <Button color="primary" fullWidth onClick={() => onButtonClick()}>
            {icon}
            {buttonText}
          </Button>
        </Grid>
        <Line />
        <Grid item xs={12}>
          <List>
            {items.map((name, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>
                    <InsertDriveFileIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDeleteItem(index)}
                  >
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
