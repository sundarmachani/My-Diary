import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import moment from "moment";
import {
  createNewEntryApi,
  getEntryByIdApi,
  updateEntryApi,
} from "./api/DiaryApiService";

export default function EntryComponent() {
  const { id } = useParams();
  const authContext = useAuth();
  const username = authContext.username;
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => retrieveEntry(), [id]);
  function retrieveEntry() {
    if (id != -1) {
      getEntryByIdApi(username, id)
        .then((res) => {
          setDescription(res.data.description || "");
          setDate(res.data.entryDate || "");
        })
        .catch((err) => console.log(err));
    }
  }

  function onSubmit(values) {
    console.log(values);
    const diary = {
      description: values.description,
      entryDate: values.date,
    };
    if (id == -1) {
      createNewEntryApi(username, diary)
        .then((res) => {
          console.log(res);
          navigate("/entries");
        })
        .catch((err) => console.log(err));
    } else {
        const diary = {
            id: id,
            description: values.description,
            entryDate: values.date,
          };
      updateEntryApi(username, diary)
        .then((res) => {
          console.log(res);
          navigate("/entries");
        })
        .catch((err) => console.log(err));
    }
  }

  function validate(values) {
    var errors = {};
    if (values.description.length < 5) {
      errors.description = "Minimum of 5 characters are need for description";
    }
    if (
      values.date == null ||
      values.date == "" ||
      !moment(values.date).isValid()
    ) {
      errors.date = "Date should have a value";
    }
    return errors;
  }

  return (
    <div className="EntryComponent">
      <h1>Enter your story here 🙂
      </h1>
      <div>
        <Formik
          initialValues={{ description : description || "", date: date || ""}}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />

              <ErrorMessage
                name="date"
                component="div"
                className="alert alert-warning"
              />

              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control descriptionBox"
                  name="description"
                ></Field>
              </fieldset>
              <fieldset className="form-group">
                <label>Date</label>
                <Field type="date" className="form-control" name="date"></Field>
              </fieldset>
              <div>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
