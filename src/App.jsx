import React, { useState } from "react";
import FormRenderer from "./components/Form";
import './App.css'

function App() {
  const [schema, setSchema] = useState("");

  const handleSchemaChange = (event) => {
    setSchema(event.target.value);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className="text_area">
        <textarea
          style={{ width: "100%", height: "100%" }}
          value={schema}
          onChange={handleSchemaChange}
        />
      </div>
      <div className="ui_display">
        <FormRenderer schema={schema} />
      </div>
    </div>
  );
}

export default App;
