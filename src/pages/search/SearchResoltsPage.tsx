import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import StarWarsObject from "../../types/starWarsObject";

const SearchResultsPage: React.FC = (): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const selectedSearch = searchParams.get("select");
  const [searchResolts, setSearchResolts] = useState<StarWarsObject[]>([]);

  const { data, loading, error } = useFetch<StarWarsObject>(
    `${selectedSearch}/search=${q}`
  );
  if (data) {
    setSearchResolts(data.results);
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{searchResolts.length} results found</p>
        </>
      )}
    </>
  );
};

export default SearchResultsPage;
