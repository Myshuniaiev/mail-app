import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import css from "./CreatePost.module.css";
import { InjectedFormProps } from "redux-form";
import { Response } from "../../elements/styles";
// REDUX FORM
interface Props {
  response: string;
}

let CreatePostForm: React.FC<Props & InjectedFormProps<{}, Props>> = ({
  response,
  handleSubmit,
}) => {
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
      <Response response={response}>{response}</Response>
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
};

const form = reduxForm<{}, Props>({
  form: "create-post",
})(CreatePostForm);

export default form;
