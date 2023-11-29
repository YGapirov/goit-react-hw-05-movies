import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div className={css.Div}>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit(values.query); //передаємо значення квері додавши до валуе квері
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <Field
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search movies"
          />
        </Form>
      </Formik>
    </div>
  );
};
