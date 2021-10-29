import { Image } from "react-bootstrap";

export default function Hero() {
  return (
    <div id="hero" className="m-n4">
      <Image src="/breezeHero.png" fluid />
      <div className="hero-text d-flex flex-column align-items-end">
        <h1>Breeze Stories</h1>
        <p>A place for Storytellers and readers.</p>
      </div>
    </div>
  );
}
