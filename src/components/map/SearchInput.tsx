import { FormEvent, useRef } from "react";
import { withTranslation } from "react-i18next";
import { SearchInputProps } from "./types";

export const SearchInput = withTranslation()((props: SearchInputProps) => {
  const { onEnter, setSearch, searchPlaceholder } = props;

  const searchInput = useRef<any>(null);
  const keywordInput = useRef<any>(null);

  //animations
  const placeholderEffect = () => {
    const element = keywordInput.current;
    const bar = searchInput.current;
    const value = element.value;
    if (value === "") {
      bar.classList.toggle("active");
    }
  };

  //Keyword actions
  const keywordFunction = (event: any) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onEnter();
  };

  return (
    <form ref={searchInput} className="search-input" onSubmit={handleSubmit}>
      <span className="far fa-search search-input__keyword-icon"></span>
      <input
        ref={keywordInput}
        className="search-input__keyword-input"
        placeholder={searchPlaceholder}
        onChange={(e) => keywordFunction(e)}
        onFocus={() => placeholderEffect()}
        onBlur={() => placeholderEffect()}
      />
    </form>
  );
});
