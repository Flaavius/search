import { FC } from 'react';

import StyledResults from "./Results.style";
import type { PageResults } from './../../App';

interface SearchResultsProps {
  searchResult?: PageResults;
  loading: boolean;
}

export const SearchResults: FC<SearchResultsProps> = ({ searchResult, loading }) => {
  if(loading) return (
    <StyledResults>
      <small> loading results </small>
    </StyledResults>
  );

  if(!searchResult) return null;

  console.log(searchResult);

  return (<StyledResults>
    <small> {searchResult.results}  results in {(searchResult.time / 1000).toFixed(2)} seconds </small>
    <ul>
      {searchResult.pages.map(({ title, description, url, pageTitle }) => {
        return (<li key={title}>
          <div className='result-row' >
            <a href={url} >
              <h3>{pageTitle}</h3>
              <p>{title}</p>
            </a>
            <div className='description'>{description}</div>
          </div>
        </li>);
      })}
    </ul>
  </StyledResults>);
};