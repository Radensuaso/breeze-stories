import { FloatingLabel, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ChangeEvent, useState } from "react";

export default function PostUpdateStoryPage() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [storyImage, setStoryImage] = useState<null | FileList>(null);
  const [story, setStory] = useState("");

  const handleCheckBoxes = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCategories([...categories, e.target.value]);
    } else {
      const index = categories.indexOf(e.target.value);
      categories.splice(index, 1);
      setCategories(categories);
    }
  };

  return (
    <div className="general-container p-5">
      <h2 className="mb-4">Post a Story</h2>
      <Form>
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </FloatingLabel>
        <Form.Group className="mb-3" onChange={handleCheckBoxes}>
          <Form.Label>Categories (at least one)</Form.Label>
          <br />
          {[
            "Mystery",
            "Thriller",
            "Horror",
            "Historical",
            "Romance",
            "Sci-fi",
            "Fantasy",
            "Dystopian",
          ].map((category, i) => (
            <Form.Check
              key={i}
              className="d-inline-block me-3"
              type="checkbox"
              label={category}
              value={category}
            />
          ))}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Story image (optional)</Form.Label>
          <Form.Control
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStoryImage(e.target.files)
            }
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Story</Form.Label>
          <ReactQuill
            theme="snow"
            style={{ height: "400px" }}
            value={story}
            onChange={setStory}
          />
        </Form.Group>
        <div className="d-flex justify-content-end mt-5">
          <Button
            type="submit"
            variant="outline-dark"
            className="background-gradient"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
