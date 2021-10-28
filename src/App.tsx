import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BreezeFooter from "./components/BreezeFooter";
import BreezeNavBar from "./components/BreezeNavBar";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthorsPage from "./pages/AuthorsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MePage from "./pages/MePage";
import PostUpdateStoryPage from "./pages/PostUpdateStoryPage";
import RandomStoryPage from "./pages/RandomStoryPage";
import SingleAuthorPage from "./pages/SingleAuthorPage";
import SingleStoryPage from "./pages/SingleStoryPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <BreezeNavBar />
        <Container>
          <Route path="/" component={HomePage} />
          <Route path="/me" component={MePage} />
          <Route path="/authors" component={AuthorsPage} />
          <Route path="/postStory" component={PostUpdateStoryPage} />
          <Route path="/random" component={RandomStoryPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/singleAuthor/:authorId" component={SingleAuthorPage} />
          <Route path="/singleStory/:storyId" component={SingleStoryPage} />
          <Route path="/about" component={AboutPage} />
        </Container>
        <BreezeFooter />
      </div>
    </Router>
  );
}
