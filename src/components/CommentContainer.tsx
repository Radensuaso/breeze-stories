import { Image, Row, Col } from "react-bootstrap";
import { Comment } from "../typings/Comment";
import { format, parseISO } from "date-fns";

interface CommentContainerProps {
  comment: Comment;
}

export default function CommentContainer({ comment }: CommentContainerProps) {
  return (
    <Row className="justify-content-end">
      <Col xs={11} className="general-container comments p-4 mb-4 d-flex">
        <Image
          className="me-4"
          src={comment?.author.avatar}
          style={{ maxHeight: "5rem", maxWidth: "5rem" }}
          roundedCircle
          fluid
        />
        <div className="d-flex flex-column w-100">
          <h5>{comment?.author.name}</h5>
          <p>{comment?.comment}</p>
          <p className="align-self-end mb-4">
            <em>{format(parseISO(comment?.createdAt), "PPpp")}</em>
          </p>
        </div>
      </Col>
    </Row>
  );
}
