import { Image } from "react-bootstrap";

export default function AuthorInfo() {
  return (
    <div className="author-info d-flex align-self-end align-items-center mb-4">
      <div className="me-3" style={{ maxHeight: "4rem", maxWidth: "4rem" }}>
        <Image src="/breezeStories.png" fluid roundedCircle />
      </div>
      <div className="author-name">Stephen King</div>
    </div>
  );
}
