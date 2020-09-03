import * as React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
} from "react-instantsearch-dom";
import "./App.css";



const searchClient = algoliasearch(
  "SSN9CKZUJ2",
  "ae8a3f7cff93d40282a4831930bfa38b"
);

export default function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <div className="app">
        <div className="search-container">
          <SearchBox />
          <Hits hitComponent={Product} />
        </div>
      </div>
    </InstantSearch>
  );
}

type IProductProps = {
  hit: Hits;
};

const Product: React.FC<IProductProps> = (hit) => {
  return (
    <a className="product">
      <img src={hit.image} alt={hit.name}></img>
      <div>
        <h3>{hit.brand}</h3>
        <h2>{hit.name}</h2>
        <p>{hit.price}</p>
      </div>
    </a>
  );
};
