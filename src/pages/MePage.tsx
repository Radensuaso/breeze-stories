import PresentationPanel from "../components/PresentationPanel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../typings/ReduxStore";
import { getMeAction } from "../redux/actions/getMeAction";
import { getMyStoriesAction } from "../redux/actions/getMyStoriesAction";
import { getHeartedStories } from "../redux/actions/getHeartedStories";

export default function MePage() {
  const authorizationHeader = useSelector(
    (state: ReduxStore) => state.authorizationHeader
  );
  const me = useSelector((state: ReduxStore) => state.me);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeAction(authorizationHeader.config));
    dispatch(getMyStoriesAction(authorizationHeader.config));
    dispatch(getHeartedStories(authorizationHeader.config));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <PresentationPanel author={me.data} />
    </div>
  );
}
