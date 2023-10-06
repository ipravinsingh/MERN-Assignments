import Heading from "./components/Heading";
import Main from "./components/Main";
import Anuj1 from "./assets/anuj1.jpg";
import Anuj2 from "./assets/anuj2.jpeg";
import Anuj3 from "./assets/anuj3.jpeg";
import Anuj4 from "./assets/anuj4.jpeg";
import Anuj5 from "./assets/anuj5.jpeg";
import Anuj6 from "./assets/anuj6.jpeg";
import Anuj7 from "./assets/anuj7.jpeg";
import Anuj8 from "./assets/anuj8.jpeg";

function App() {
  const container = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  };

  return (
    <div className="App">
      <Heading />
      <div style={container}>
        <Main
          image={Anuj1}
          heading="Introduction To HTML || HTML"
          para="1.2k views : 2 days ago"
        />
        <Main
          image={Anuj2}
          heading="Sabki Job Lagegi || Anuj bhaiya"
          para="1.5k views : 4 days ago"
        />
        <Main
          image={Anuj3}
          heading="Data Science Roadmap || Data Scientist in 2022"
          para="1.8k views : 6 days ago"
        />
        <Main
          image={Anuj4}
          heading="Boost Your Programming Logic || 30 Days"
          para="1.9k views : 1 week ago"
        />
        <Main
          image={Anuj5}
          heading="Crack Aptitude || Best Resources For Free"
          para="2.5k views : 2 weeks ago"
        />
        <Main
          image={Anuj6}
          heading="Operating System  || In 1 video"
          para="3.5k views : 2 weeks ago"
        />
        <Main
          image={Anuj7}
          heading="From 1 To 100 || DSA DONE"
          para="4.4k views : 1 month ago"
        />
        <Main
          image={Anuj8}
          heading="Only HTML & Css || HTML"
          para="5.5k views : 2 months ago"
        />
      </div>
    </div>
  );
}

export default App;
