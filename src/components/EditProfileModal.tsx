import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { ChangeEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxStore } from "../typings/ReduxStore";

interface EditProfileModalProps {
  show: boolean;
  onHide: () => void;
}

interface ProfileDetails {
  name: string | undefined;
  email: string | undefined;
  birthDate: string | undefined;
  gender: string | undefined;
  bio: string | undefined;
}
export default function EditProfileModal(props: EditProfileModalProps) {
  const [profileDetails, setProfileDetails] = useState<ProfileDetails>({
    name: "",
    email: "",
    birthDate: "",
    gender: "",
    bio: "",
  });
  const [avatar, setAvatar] = useState<null | FormData>(null);

  const me = useSelector((state: ReduxStore) => state.me.data);

  const handleDetailsChange = (key: string, value: string) => {
    setProfileDetails({ ...profileDetails, [key]: value });
  };

  useEffect(() => {
    setProfileDetails({
      ...profileDetails,
      name: me?.name ? me?.name : "",
      email: me?.email ? me?.email : "",
      birthDate: me?.birthDate ? me?.birthDate.slice(0, 10) : "",
      gender: me?.gender ? me?.gender : "",
      bio: me?.bio ? me?.bio : "",
    });
  }, []);
  return (
    <Modal {...props} size="lg" aria-labelledby="edit-profile-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="edit-profile-modal">Edit my profile</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <FloatingLabel label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={profileDetails.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleDetailsChange("name", e.target.value)
              }
            />
          </FloatingLabel>
          <FloatingLabel label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={profileDetails.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleDetailsChange("email", e.target.value)
              }
            />
          </FloatingLabel>
          <FloatingLabel label="Birth date" className="mb-3">
            <Form.Control
              type="date"
              placeholder="Birth date"
              defaultValue={profileDetails.birthDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleDetailsChange("birthDate", e.target.value)
              }
            />
          </FloatingLabel>
          <FloatingLabel label="Gender" className="mb-3">
            <Form.Select
              aria-label="Gender"
              value={profileDetails.gender}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleDetailsChange("gender", e.target.value)
              }
            >
              <option value="">Don't want to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel label="Bio" className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Bio"
              value={profileDetails.bio}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleDetailsChange("bio", e.target.value)
              }
              style={{ height: "150px" }}
            />
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
