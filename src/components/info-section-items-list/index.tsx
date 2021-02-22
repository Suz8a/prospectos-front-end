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
import React from "react";
import Line from "../../elements/line";
import Title from "../../elements/title";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FormSectionContainer from "../../elements/form-section-container";
import GetAppIcon from "@material-ui/icons/GetApp";

type InfoSectionItemsListProps = {
  items?: { name: string; url: string }[];
  padding?: string;
};

function InfoSectionItemsList({ items, padding }: InfoSectionItemsListProps) {
  return (
    <FormSectionContainer padding={padding}>
      <Grid container>
        <Grid item xs={9}>
          <Title text="Documentos" />
        </Grid>
        <Line />
        <Grid item xs={12}>
          {items && (
            <List>
              {items.map(({ name, url }, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <InsertDriveFileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={name} />
                  <ListItemSecondaryAction>
                    <a href={url}>
                      <IconButton edge="end" aria-label="download">
                        <GetAppIcon />
                      </IconButton>
                    </a>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </FormSectionContainer>
  );
}

export default InfoSectionItemsList;
