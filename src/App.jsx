
// import React, { useState } from "react";
// import Form from "react-jsonschema-form";
// import "./styles.css";

// function App() {
//   const [uiSchema, setUiSchema] = useState({});

//   const handleUiSchemaChange = (e) => {
//     const newUiSchema = JSON.parse(e.target.value);
//     setUiSchema(newUiSchema);
//   };

//   return (
//     <div className="app">
//       <div className="editor-container">
//         <textarea
//           placeholder="Enter UI schema here"
//           onChange={handleUiSchemaChange}
//         />
//       </div>
//       <div className="preview-container">
//         {Array.isArray(uiSchema) ? (
//           uiSchema.map((schema, index) => (
//             <Form key={index} schema={schema} liveValidate />
//           ))
//         ) : (
//           <Form schema={uiSchema} liveValidate />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Form from "react-jsonschema-form";
import "./styles.css";

function App() {
  const [uiSchema, setUiSchema] = useState({});

  const handleUiSchemaChange = (e) => {
    const newUiSchema = JSON.parse(e.target.value);
    if (Array.isArray(newUiSchema)) {
      setUiSchema({ wrapper: newUiSchema });
    } else {
      setUiSchema(newUiSchema);
    }
  };

  return (<>
    <div className="heading">Automatically rendered UI Schema</div>
    <div className="app">
      <div className="editor-container">
        <textarea
          placeholder="Enter UI schema here"
          onChange={handleUiSchemaChange}
        />
      </div>
      <div className="preview-container">
        {uiSchema.wrapper ? (
          uiSchema.wrapper.map((schema, index) => (
            <Form key={index} schema={schema} liveValidate />
          ))
        ) : (
          <Form schema={uiSchema} liveValidate />
        )}
      </div>
    </div>
    </>
  );
}

export default App;
