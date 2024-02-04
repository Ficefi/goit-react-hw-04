import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ addPage }) => {
  return (
    <button className={css.load_more} onClick={addPage}>
      Load More
    </button>
  );
};
