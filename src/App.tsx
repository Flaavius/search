import { useState } from 'react';
import StyledApp from './StyledApp';
import { SearchResults } from './components/results/SearchResults';
import { SearchBox } from './components/searchBox/SearchBox';
import { Page, pages } from './constants';

const wait = (time: number = 1000) => new Promise((res) => setTimeout(res, time))

export interface PageResults {
  pages: Page[],
  time: number;
  results: number;
}

const searchPages = async (value: string): Promise<PageResults> => {
  const startTime = Date.now();
  const foundPages = pages.filter(({ title }) => {
    return title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  });
  await wait(foundPages.length * 150);

  return {
    pages: foundPages,
    time: Date.now() - startTime,
    results: foundPages.length,
  };
};

function App() {
  const [searchResult, setSearchResult] = useState<PageResults | undefined>();
  const [loading, setLoading] = useState(false);

  return (
    <StyledApp>
      <SearchBox onSearch={async (value) => {
          setLoading(true);
          const result = await searchPages(value);
          setSearchResult(result);
          setLoading(false);
      }} />
      <SearchResults loading={loading} searchResult={searchResult} />
    </StyledApp>
  );
}


export default App;
