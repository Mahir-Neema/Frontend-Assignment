import React from "react";

function FormRenderer({ schema }) {
  const formElements = [];

  const renderField = (fieldSchema, key) => {
    switch (fieldSchema.type) {
      case "string":
        if (fieldSchema.enum) {
          // Render a select element for enums
          formElements.push(
            <label key={key}>
              {fieldSchema.title}:
              <select name={fieldSchema.name}>
                {fieldSchema.enum.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          );
        } else if (fieldSchema.format === "textarea") {
          // Render a textarea element for string fields with "textarea" format
          formElements.push(
            <label key={key}>
              {fieldSchema.title}:
              <textarea name={fieldSchema.name} rows={3} />
            </label>
          );
        } else {
          // Render a text input element for regular string fields
          formElements.push(
            <label key={key}>
              {fieldSchema.title}:
              <input type="text" name={fieldSchema.name} />
            </label>
          );
        }
        break;
      case "number":
        // Render a number input element for number fields
        formElements.push(
          <label key={key}>
            {fieldSchema.title}:
            <input type="number" name={fieldSchema.name} />
          </label>
        );
        break;
      case "boolean":
        // Render a checkbox element for boolean fields
        formElements.push(
          <label key={key}>
            <input type="checkbox" name={fieldSchema.name} />
            {fieldSchema.title}
          </label>
        );
        break;
      case "array":
        // Render a list of input elements for array fields
        formElements.push(
          <div key={key}>
            {fieldSchema.title}:
            {fieldSchema.items.map((itemSchema, index) =>
              renderField(itemSchema, `${key}-${index}`)
            )}
          </div>
        );
        break;
      case "object":
        // Recursively render child properties for object fields
        formElements.push(
          <fieldset key={key}>
            <legend>{fieldSchema.title}</legend>
            {Object.entries(fieldSchema.properties).map(([key, value]) =>
              renderField(value, key)
            )}
          </fieldset>
        );
        break;
      case "textarea":
        // Render a textarea element for fields with "textarea" type
        return (
          <label key={key}>
            {fieldSchema.title}:
            <textarea name={fieldSchema.name} rows={3} />
          </label>
        );
      case "select":
        // Render a select element for fields with "select" type
        return (
          <label key={key}>
            {fieldSchema.title}:
            <select name={fieldSchema.name}>
              {fieldSchema.options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      default:
        break;
    }

    if (fieldSchema.properties) {
      Object.entries(fieldSchema.properties).forEach(([key, value]) => {
        renderField(value, key);
      });
    }
  };



  if (schema) {
    const parsedSchema = JSON.parse(schema);
    renderField(parsedSchema, "root");
  }

  return <form>{formElements}</form>;
}

export default FormRenderer;
