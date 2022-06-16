import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

export default App;
