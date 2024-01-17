import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import SearchResultsPage from "./pages/search/SearchResoltsPage";
// Assuming you're using React Router v6 with useRoutes
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