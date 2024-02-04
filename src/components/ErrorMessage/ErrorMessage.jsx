import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <div className={css.problem_container}>
      <b className={css.header_problem}>Sorry we have problems</b>
      <p className={css.problem}>Try reload page</p>
    </div>
  );
};
