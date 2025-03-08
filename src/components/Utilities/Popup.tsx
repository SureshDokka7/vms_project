import { Container, Modal, Row } from "react-bootstrap";
export type ModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  size?: "sm" | "lg" | "xl" | undefined;
  from?: string;
};
const Popup = ({
  show,
  onHide,
  title,
  content,
  footer,
  size,
  from,
}: ModalProps) => {
  console.log(from);
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      centered
      className="PopUpModel"
      id="PopUpModel"
      size={size}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>{content}</Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};
export default Popup;
