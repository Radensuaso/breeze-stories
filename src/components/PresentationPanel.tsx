import { SingleAuthor } from "../typings/ReduxStore";
import { Row, Col, Image } from "react-bootstrap";
import { format, parseISO } from "date-fns";

interface PresentationPanelProps {
  author: SingleAuthor["data"];
}

export default function PresentationPanel({ author }: PresentationPanelProps) {
  return (
    <div className="presentation-panel p-5">
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <Image
            src={author?.avatar}
            className="mb-3"
            roundedCircle
            fluid
            style={{ maxHeight: "20rem", maxWidth: "20rem" }}
          />
          <h2 className="text-center mb-4">{author?.name}</h2>
        </Col>
        <Col
          xs={12}
          md={6}
          className="info d-flex flex-column align-items-center justify-content-center p-5"
        >
          <p className="text-center">
            <strong>Contact me:</strong> <br /> {author?.email}
          </p>
          {author?.birthDate && (
            <p className="text-center">
              <strong>Birth date:</strong> <br />
              {format(parseISO(author?.birthDate), "PPP")}
            </p>
          )}
          {author?.gender && (
            <p className="text-center">
              <strong>Gender:</strong> <br />
              {author?.gender}
            </p>
          )}
          {author?.bio && (
            <p className="text-center">
              <strong>Bio:</strong> <br />
              {author?.bio}
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
}
