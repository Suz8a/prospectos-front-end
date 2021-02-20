import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Description,
  DropArea,
  Item,
  UploadButton,
  CancelIconContainer,
  CancelIcon,
  ButtonDescription,
} from "./styled";
import { Button } from "@material-ui/core";

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
                <div style={{ marginTop: "30px" }}>
                  <div>cloud</div>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Description>Arrastre imagen aqui</Description>
                  </Grid>
                </div>
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

            <Button
              variant="contained"
              color="primary"
              onClick={getRootProps().onClick}
            >
              Seleccionar archivos
            </Button>
          </DropArea>
        </div>
      )}
    </Dropzone>
  );
}

/**              <img
                  src={file.preview}
                  alt={file.path}
                  style={{ width: 50, height: 50, padding: "5px" }}
                /> */

export default DropFileZone;
