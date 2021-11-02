import { Image } from "react-bootstrap";
import AuthorInfo from "./AuthorInfo";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

export default function StoryContainer() {
  return (
    <div className="story-container p-5 mb-4 d-flex flex-column align-items-center">
      <h2 className="mb-4">Short Story</h2>
      <h5 className="mb-4">Fantasy, Horror</h5>
      <div className="mb-4" style={{ maxHeight: "22rem", maxWidth: "30rem" }}>
        <Image src="https://picsum.photos/1000/700" fluid rounded />
      </div>
      <div className="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
        libero, natus aut quidem exercitationem quisquam tempore laudantium quae
        ab quibusdam maxime iure architecto dignissimos, aliquam dolor aliquid
        eligendi sit possimus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam quidem officiis dignissimos, voluptas eligendi
        assumenda modi reiciendis porro, quibusdam odio animi commodi. Rerum
        ipsam ab reprehenderit nulla animi blanditiis et.
      </div>
      <div className="hearts-comments align-self-start mb-4">
        <span className="me-4">
          <AiOutlineHeart size={40} />
        </span>
        <span>
          <FaComments size={40} />
        </span>
      </div>
      <p className="align-self-end mb-4">Posted: 12/Fev/2000</p>
      <AuthorInfo />
    </div>
  );
}
