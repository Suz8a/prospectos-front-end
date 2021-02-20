import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "../../elements/card";
import { ModalContainer } from "./styled";

type FileUploaderProps = {};

function FileUploader() {
  return (
    <Modal
      open={true}
      onClose={() => {}}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalContainer>
        <Card width="200px" height="200px">
          <div>holi</div>
        </Card>
      </ModalContainer>
    </Modal>
  );
}

export default FileUploader;
