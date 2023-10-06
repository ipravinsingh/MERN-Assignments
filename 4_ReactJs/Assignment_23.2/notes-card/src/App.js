import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div style={{ padding: "20px" }}>
        <h3>Notes</h3>
        <input
          style={{ width: "100%", marginTop: "10px" }}
          type="text"
          id="searchInput"
          placeholder="type to search"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        <Main para="This is my first note" date="09/06/2021" icon="icon" />
        <Main para="This is my first note" date="09/06/2021" icon="icon" />
        <Main para="This is my first note" date="09/06/2021" icon="icon" />
        <Main para="This is my first note" date="09/06/2021" icon="icon" />
      </div>
    </div>
  );
}

export default App;
