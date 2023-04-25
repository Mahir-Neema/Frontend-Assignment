#  Dynamic Form Preview
### This is a React application that allows users to paste a UI schema in a JSON format on the left side of the screen and preview the rendered form on the right side. The application has a single screen which is divided into two equal sections. On the left section, users can input the UI-Schema as a JSON object, and on the right section, the form will be automatically rendered based on the UI-Schema.

## Technologies used-
- React: a popular JavaScript library for building user interfaces.
- Chakra UI: a simple, modular and accessible component library that gives developers the building blocks they need to create beautiful and user-friendly websites and web applications.

## To view the Assignment: [click here](https://mahir-neema.github.io/Frontend-Assignment/) 

## How to run the application? 
1. Clone the repository to your local machine.
```bash
git clone https://github.com/username/dynamic-form-preview.git
```
2. Navigate to the project directory.<br>
3. Install the project dependencies. <br>
```bash
npm install
```
4. Start the application.<br>
```bash
npm run dev
```
5. Open your browser and go to http://localhost:5173 to view the application.

## How to use the application?
1. On the left side of the screen, paste the UI schema in JSON format. The UI schema is a JSON object that describes the fields and their properties in the form.<br>
**or click on view test form button**
```bash
[
  {
    "type": "string",
    "sort": 1,
    "label": "Pizza Name",
    "description": "",
    "validate": {
      "required": true,
      "immutable": false
    },
    "jsonKey": "name",
    "uiType": "Input",
    "icon": "",
    "level": 0,
    "placeholder": ""
  }
]
```
2. The right side of the screen will render the form based on the UI schema that you pasted.
3. You can click on the Full Screen IDE button to view the code editor in full screen mode.
4. You can click on the Full Screen Preview button to view the form in full screen mode.
5. You can click on the View Test Form button to view a pre-defined test form.
6. You can click on the Reset IDE button to clear the code editor and start from scratch.

## File structure
### The file structure of the project is as follows::
```bash
dynamic-form-preview/
├── public
├── index.html
├── ...
├── src/
│   ├── components/
│   │   ├── DynamicForm.jsx
│   │   ├── Group.jsx
│   │   ├── Inputs.jsx
│   │   ├── isJson.jsx
│   │   ├── Modal.jsx
│   │   ├── Radio.jsx
│   │   ├── Select.jsx
│   │   └── Submit.jsx
│   ├── constants/
│   │   ├── inputs.js
│   │   └── testForm.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package-lock.json
├── package.json
└── README.md
```
