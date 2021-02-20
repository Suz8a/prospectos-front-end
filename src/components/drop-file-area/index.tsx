import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
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

type FileType = File & { preview: string; path: string };
function DropFileZone() {
  const [lista, setLista] = useState<FileType[]>([]);
  function onDelete(index: number) {
    console.log(index);
    return () => {
      const newLista = [...lista];
      newLista.splice(index, 1);
      setLista(newLista);
    };
  }
  function onSetLista(lista: FileType[]) {
    setLista(lista);
    console.log(lista);
  }
  return (
    <Dropzone
      onDrop={(files_) => {
        const files = (files_ as unknown) as FileType[];
        let files_with_preview = files.map((file) => {
          file["preview"] = URL.createObjectURL(file);
          return file;
        });

        const new_files = [...lista, ...files_with_preview];

        onSetLista(new_files);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          onClick={() => {}}
          className=""
          style={{ width: "100%", height: "124px", margin: "auto" }}
        >
          <input {...getInputProps()} />
          <DropArea>
            {lista.length === 0 ? (
              <>
                <DescriptionContainer>
                  <IoMdCloudUpload size="30px" color="#9c9c9cde" />
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

            {lista.length > 0 ? (
              <div style={{ width: "auto", height: "100px", overflow: "auto" }}>
                {lista.map((file, index) => (
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

            <UploadButton onClick={getRootProps().onClick}>
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
