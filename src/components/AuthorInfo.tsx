import { withRouter, RouteComponentProps } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Author } from "../typings/Author";

interface AuthorInfoProps extends RouteComponentProps {
  author: Author;
}

function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="author-info d-flex align-self-end align-items-center mb-4">
      <div className="me-3" style={{ maxHeight: "4rem", maxWidth: "4rem" }}>
        <Image src={author?.avatar} fluid roundedCircle />
      </div>
      <div className="author-name">{author?.name}</div>
    </div>
  );
}

export default withRouter(AuthorInfo);
