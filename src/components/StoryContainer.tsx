import { Image } from "react-bootstrap";

export default function StoryContainer() {
  return (
    <div className="story-container p-5 d-flex flex-column align-items-center">
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
      <div className="author d-flex align-self-end align-items-center mb-4">
        <div className="me-3" style={{ maxHeight: "4rem", maxWidth: "4rem" }}>
          <Image src="/breezeStories.png" fluid roundedCircle />
        </div>
        <div className="author-name">Stephen King</div>
      </div>
      <p className="align-self-end">Posted: 12/Fev/2000</p>
    </div>
  );
}
