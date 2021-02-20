import React from "react";
import Dropzone from "react-dropzone";
import Grid from "@material-ui/core/Grid";
import { IoMdCloudUpload } from "react-icons/io";
import {
  Description,
  DropArea,
  Item,
  UploadButton,
  CancelIconContainer,
  CancelIcon,
  ButtonDescription,
  DescriptionContainer,
} from "./styled";

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
                  <IoMdCloudUpload size="40px" color="#9c9c9cde" />
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Description>Arrastre archivo aqui</Description>
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

            <UploadButton
              onClick={getRootProps().onClick}
              show={items.length === 0}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <ButtonDescription>Seleccionar archivos</ButtonDescription>
              </Grid>
            </UploadButton>
          </DropArea>
        </div>
      )}
    </Dropzone>
  );
}

export default DropFileZone;
