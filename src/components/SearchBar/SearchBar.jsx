import { IoSearchOutline } from "react-icons/io5";
import css from "./SearchBar.module.css";

export const SearchBar = ({ searchValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.elements.search.value.trim() === "") {
      console.log("Empty String");
      return;
    }

    searchValue(event.target.elements.search.value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.search_form}>
      <input type="text" name="search" autoComplete="off" className={css.input_selector} />
      <button type="submit" className={css.submit_btn}>
        <IoSearchOutline size={25} />
      </button>
    </form>
  );
};
