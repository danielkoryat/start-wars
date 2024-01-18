import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import SearchResultsPage from "./pages/search/SearchResoltsPage";

const routes = [
  {
    path: "/",
    element:Home ,
  },
  {
    path: "/characters",
    element: Characters ,
  },
  {
    path: "/search",
    element: SearchResultsPage 
  }
];

export default routes;