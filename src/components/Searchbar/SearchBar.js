import { Formik, Form, Field } from 'formik';
import css from './SearchBar.module.css';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ onSubmit }) => {
  const [params, setParams] = useSearchParams();

  const query = params.get('query') ?? '';
  // console.log(query);

  return (
    <div className={css.Div}>
      <Formik
        initialValues={{ query }}
        onSubmit={(values, actions) => {
          onSubmit(values.query); //передаємо значення квері додавши до валуе квері
          params.set('query', values.query);
          setParams(params);

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
