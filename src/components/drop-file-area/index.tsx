import React from "react";
import Dropzone from "react-dropzone";
import Grid from "@material-ui/core/Grid";
import { MdFileUpload } from "react-icons/md";
import {
  Description,
  DropArea,
  Item,
  CancelIconContainer,
  CancelIcon,
  DescriptionContainer,
} from "./styled";
import { Button } from "@material-ui/core";

export type FileType = File & { preview: string; path: string };

type DropFileZoneProps = {
  onDelete: (index: number) => void;
  onSetItems: (items: FileType[]) => void;
  items: FileType[];
};

function DropFileZone({ onDelete, onSetItems, items }: DropFileZoneProps) {
  return (
    <Dropzone
      onDrop={(files_) => {
        const files = (files_ as unknown) as FileType[];
        let files_with_preview = files.map((file) => {
          file["preview"] = URL.createObjectURL(file);
          return file;
        });
        const new_files = [...items, ...files_with_preview];
        onSetItems(new_files);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          onClick={() => {}}
          style={{ width: "100%", height: "auto" }}
        >
          <input {...getInputProps()} />
          <DropArea>
            {items.length === 0 ? (
              <>
                <DescriptionContainer>
                  <MdFileUpload size="40px" color="rgba(123, 123, 123, 0.87)" />
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12}>
                      <Description>Arrastre archivo aqui</Description>
                    </Grid>
                    <Grid item xs={12}>
                      <Description>o</Description>
                    </Grid>
                  </Grid>
                </DescriptionContainer>
              </>
            ) : null}

            {items.length > 0 ? (
              <div style={{ width: "100%", height: "auto", overflow: "auto" }}>
                {items.map((file, index) => (
                  <Item key={index}>
                    {file.path}
                    <CancelIconContainer
                      onClick={() => {
                        onDelete(index);
                      }}
                    >
                      <CancelIcon />
                    </CancelIconContainer>
                  </Item>
                ))}
              </div>
            ) : null}

            <Button
              color="primary"
              onClick={getRootProps().onClick}
              style={{
                display: items.length !== 0 ? "none" : "",
              }}
            >
              Seleccionar archivos
            </Button>
          </DropArea>
        </div>
      )}
    </Dropzone>
  );
}

export default DropFileZone;
