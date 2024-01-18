import Home from "./pages/Home/Home";
import DataPage from "./pages/DataPage/DataPage";
import SearchResultsPage from "./pages/search/SearchResoltsPage";

const routes = [
  {
    path: "/",
    element:Home ,
  },
  {
    path: "/people",
    element: DataPage ,
  },
  {
    path: "/planets",
    element: DataPage ,
  },
  {
    path: "/films",
    element: DataPage ,
  },
  {
    path: "/search",
    element: SearchResultsPage 
  }
];

export default routes;