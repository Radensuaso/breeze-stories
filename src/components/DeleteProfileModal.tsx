import { Modal, Button } from "react-bootstrap";

interface DeleteProfileModalProps {
  show: boolean;
  onHide: () => void;
}

export default function DeleteProfileModal(props: DeleteProfileModalProps) {
  return (
    <Modal {...props} size="lg" aria-labelledby="edit-profile-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="edit-profile-modal">Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is irreversible!</Modal.Body>
      <Modal.Footer>
        <Button variant="danger">I'm Sure.</Button>
        <Button variant="success" onClick={props.onHide}>
          I'm not sure
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
