import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "50px",
          marginTop: "30px",
        }}
      >
        <Main
          icon="icon"
          headingFour="Card souting"
          para="Discover how people group and lebel information"
        />
        <Main
          icon="icon"
          headingFour="Prototype tests"
          para="Discover how people navigate your Figma prototype"
        />
        <Main
          icon="icon"
          headingFour="First click tests"
          para="Test interaction with first click and navigation tests"
        />
        <Main
          icon="icon"
          headingFour="Design surveys"
          para="Get feedback on images, videos or audio files."
        />
        <Main
          icon="icon"
          headingFour="Preference tests"
          para="Find out which designs users prefer and why"
        />
        <Main
          icon="icon"
          headingFour="Five seconds tests"
          para="Test comprehensibility by measuring first impressions"
        />
      </div>
    </div>
  );
}

export default App;
