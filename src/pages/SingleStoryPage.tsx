import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStoryAction } from "../redux/actions/getStoryAction";
import { getCommentsAction } from "../redux/actions/getCommentsAction";
import { ReduxStore } from "../typings/ReduxStore";
import StoryContainer from "../components/StoryContainer";
import {
  Form,
  Row,
  Col,
  Container,
  FloatingLabel,
  Button,
  Alert,
} from "react-bootstrap";
import Loader from "../components/Loader";
import CommentContainer from "../components/CommentContainer";

interface MatchParams {
  storyId: string;
}

export default function SingleStoryPage() {
  const story = useSelector((state: ReduxStore) => state.story);
  const comments = useSelector((state: ReduxStore) => state.comments);

  const params = useRouteMatch<MatchParams>().params;
  const storyId = params.storyId;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoryAction(storyId));
    dispatch(getCommentsAction(storyId));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {story.loading ? (
        <Loader />
      ) : story.error ? (
        <Alert variant="danger">{story.error}</Alert>
      ) : (
        <StoryContainer story={story.data} />
      )}
      <Container>
        <Form>
          <Row className="general-container p-4 mb-4">
            <Col xs={12} md={8} lg={10} className="mb-2">
              <FloatingLabel label="Post a comment">
                <Form.Control as="textarea" />
              </FloatingLabel>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={2}
              className="d-grid"
              style={{ maxHeight: "58px" }}
            >
              <Button
                className="background-gradient"
                variant="outline-dark"
                type="submit"
              >
                Comment
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      {comments.loading ? (
        <Loader />
      ) : comments.error ? (
        <Alert variant="danger">{comments.error}</Alert>
      ) : (
        comments.data.map((comment, i) => (
          <CommentContainer key={i} comment={comment} />
        ))
      )}
    </div>
  );
}
