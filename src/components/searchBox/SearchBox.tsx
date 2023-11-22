import { useState, useRef, useEffect, KeyboardEventHandler } from "react";
import StyledSearchBox from "./SearchBox.style";

import { SearchIcon } from "../icons/SearchIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { Page, pages } from "../../constants";

const getResults = (max: number) => (data: Page[], value: string): Page[] => {

  const results: Page[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
      results.push(data[i]);
    }

    if (results.length === max) return results;
  }

  return results;
}

const getMaxTenResults = getResults(10);

const onEnterPress = (callback: () => void): KeyboardEventHandler<HTMLInputElement> => (ev) => {
  if(ev.key === 'Enter') {
    callback();
  }
};

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
  const [focused, setFocus] = useState(false);
  const [history, setHistory] = useState<Record<string, boolean>>({});
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const autoCompleteResults = getMaxTenResults(pages, value);

  useEffect(() => {
    function onClickOutside() { setFocus(false); }
    document.addEventListener('click', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
    }
  }, []);


  return (<StyledSearchBox onClick={(ev) => {ev.stopPropagation()}}  focused={focused ? focused : undefined} >
    <div className="input-wrapper" >
      <SearchIcon />
      <input
        onKeyDown={onEnterPress(() => {
          props.onSearch(value);
          setFocus(false);
        })}
        ref={inputRef}
        onFocus={() => setFocus(true)}
        value={value}
        onChange={(ev) => { setValue(ev.target.value) }}
        type="text"
      />
      <CloseIcon onClick={() => setValue('')} />
    </div>
    <div className="results">
      <ul>
        {autoCompleteResults.map((res, i) => (
          <li tabIndex={0} onClick={() => {
            props.onSearch(res.title);
            setHistory(s => ({ ...s, [res.title]: true }));
            setFocus(false);
            setValue(res.title);
            inputRef.current?.blur();
          }}
          className={`${history[res.title] ? 'visited' : ''}`}
          key={i}>
            {res.title}
            <button onClick={(ev) => {
              ev.stopPropagation();
              setHistory(s => ({ ...s, [res.title]: false }))
            }}> Remove </button>
          </li>
          )
        )}
      </ul>
    </div>
  </StyledSearchBox>);
};