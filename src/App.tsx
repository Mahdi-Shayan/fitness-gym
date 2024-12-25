// Components
import Home from "./pages/home/Home";
import Benefits from "./pages/benefits/Benefits";
import Nav from "./components/navbar/Nav";

// context
import { SelectPageProvider } from "./context/SelectPage";
import OurClasses from "./pages/ourClasses/OurClasses";

function App() {
  return (
    <SelectPageProvider>
      <div className="app">
        <Nav />
        <main>
          <Home />
          <Benefits />
          <OurClasses />
        </main>
      </div>
    </SelectPageProvider>
  );
}

export default App;
