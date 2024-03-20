import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConceptsModule/coreConcept.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcept></CoreConcept>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
