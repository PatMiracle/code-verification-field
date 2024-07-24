import reactLogo from "./assets/react.svg";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <>
      <section>
        <Form />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </section>
    </>
  );
}

export default App;
