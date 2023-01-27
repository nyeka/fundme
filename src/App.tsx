import Profile from "./profiles/profile";
import Navbar from "./header/Navbar";
import Push from "./layouts/Push";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Push />
    </div>
  );
}

export default App;
