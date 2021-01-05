import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import css from "./CreatePost.module.css";
import { InjectedFormProps } from "redux-form";

interface Props {}

let CreatePostForm: React.FC<Props & InjectedFormProps<{}, Props>> = (
  props: any
) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="title"
          placeholder="Title"
          className={css.input}
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          name="body"
          placeholder="Body"
          className={css.input}
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          name="id"
          placeholder="Id"
          className={css.input}
          component="input"
          type="number"
        />
      </div>
      <button  className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
};

const form = reduxForm<{}, Props>({
  form: "create-post",
})(CreatePostForm);

export default form;
