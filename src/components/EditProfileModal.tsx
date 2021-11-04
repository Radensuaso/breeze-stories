import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

interface EditProfileModalProps {
  show: boolean;
  onHide: () => void;
}

export default function EditProfileModal(props: EditProfileModalProps) {
  const [profileDetails, setProfileDetails] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    bio: "",
  });
  const [avatar, setAvatar] = useState<null | FormData>(null);
  return (
    <Modal {...props} size="lg" aria-labelledby="edit-profile-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="edit-profile-modal">Edit my profile</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <FloatingLabel label="Full Name" className="mb-3">
            <Form.Control type="text" placeholder="Full Name" />
          </FloatingLabel>
          <FloatingLabel label="Email" className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
          <FloatingLabel label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel label="Birth date" className="mb-3">
            <Form.Control type="date" placeholder="Birth date" />
          </FloatingLabel>
          <FloatingLabel label="Gender" className="mb-3">
            <Form.Select aria-label="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </FloatingLabel>
          <Form.Group>
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-dark"
            className="background-gradient"
            type="submit"
          >
            Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
