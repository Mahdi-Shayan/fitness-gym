// Components
import Home from "./pages/home/Home";
import Nav from "./components/navbar/Nav";

// context
import { SelectPageProvider } from "./context/SelectPage";

function App() {
  return (
    <SelectPageProvider>
      <div className="app">
        <Nav />
        <main>
          <Home />
        </main>
      </div>
    </SelectPageProvider>
  );
}

export default App;
