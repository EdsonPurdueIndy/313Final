import "../App.css";
import Header from "../components/Header.js";
import List from "../List.js";

function Home() {
  const headingTitle = "ByteForge";

  return (
    <div className="App">
      <Header headingText={headingTitle} />
      <List />
    </div>
  );
}

export default Home;
