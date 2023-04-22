import React, { useState } from "react";
import Form from "react-jsonschema-form";
import styles from "./styles.css";

const FormRenderer = () => {
  const [formData, setFormData] = useState({});
  const [schema, setSchema] = useState({});
  
  const handleSchemaChange = (e) => {
    const newSchema = JSON.parse(e.target.value);
    setSchema(newSchema);
  };

  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <textarea
          className={styles.jsoneditor}
          value={JSON.stringify(schema, null, 2)}
          onChange={handleSchemaChange}
        />
      </div>
      <div className={styles.form}>
        <Form
          schema={schema}
          formData={formData}
          onChange={({ formData }) => setFormData(formData)}
          noValidate
        />
      </div>
    </div>
  );
};

export default FormRenderer;
