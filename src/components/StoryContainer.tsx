import { withRouter, RouteComponentProps, useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import AuthorInfo from "./AuthorInfo";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { Story } from "../typings/Story";
import { format, parseISO } from "date-fns";
import { useSelector } from "react-redux";
import { ReduxStore } from "../typings/ReduxStore";

interface StoryContainerProps extends RouteComponentProps {
  story: Story;
}

function StoryContainer({ story }: StoryContainerProps) {
  const me = useSelector((state: ReduxStore) => state.me);

  const history = useHistory();

  return (
    <div className="story-container p-5 mb-4 d-flex flex-column align-items-center">
      <h2 className="mb-4 text-center">{story?.title}</h2>
      <h5 className="mb-4">
        {story?.categories.map((c, i) => (
          <span key={i}>{c}, </span>
        ))}
      </h5>
      <div className="mb-4" style={{ maxHeight: "22rem", maxWidth: "30rem" }}>
        {story?.storyImage && <Image src={story?.storyImage} fluid rounded />}
      </div>
      <div className="mb-4">{story?.story}</div>
      <div className="hearts-comments align-self-start mb-4">
        <span className="me-4">
          <span className="me-2">{story?.hearts.length}</span>
          <AiOutlineHeart size={40} />
        </span>

        <span onClick={() => history.push(`/singleStory/${story?._id}`)}>
          <FaComments size={40} />
        </span>
      </div>
      <p className="align-self-end mb-4">
        <strong>Posted: </strong>
        {format(parseISO(story?.createdAt), "PPpp")}
      </p>
      <AuthorInfo author={story?.author} />
    </div>
  );
}

export default withRouter(StoryContainer);
