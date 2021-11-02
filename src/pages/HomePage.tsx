import Hero from "../components/Hero";
import StoryContainer from "../components/StoryContainer";
import Loader from "../components/Loader";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxStore } from "../typings/ReduxStore";
import { getStoriesAction } from "../redux/actions/getStoriesAction";

export default function HomePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const stories = useSelector((state: ReduxStore) => state.stories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoriesAction(title, category));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Hero />
      {stories.loading ? (
        <Loader />
      ) : stories.error ? (
        <Alert variant="danger">{stories.error}</Alert>
      ) : (
        stories.data.map((story, i) => <StoryContainer key={i} story={story} />)
      )}
    </div>
  );
}
