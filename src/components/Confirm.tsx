import React, { ReactElement, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  title: string;
  message: string;
  visible: boolean;
  onConfirm: Function;
  onClose: Function;
}

export default function Confirm({
  title,
  message,
  visible,
  onConfirm,
  onClose
}: Props): ReactElement {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    onClose();
  };
  const handleConfirm = () => {
    setShow(false);
    if (onConfirm) onConfirm();
  };
  useEffect(() => {
    setShow(visible);
  }, [visible]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
