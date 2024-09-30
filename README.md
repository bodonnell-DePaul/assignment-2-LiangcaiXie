[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/79_d0ssh)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16256548)
# Assignment2
![Example Image](ScreenShot.png)
# Assignment Description

In this assignment, you are required to create a ToDo List application using React and Bootstrap. The application will display a list of ToDo items, each with a title, description, and due date. The ToDo items will be displayed in a ListGroup and Tab interface, where the ListGroup will contain the titles of the ToDo items and the Tab will contain the descriptions and due dates of the ToDo items. The ToDo items will be color-coded based on their due dates.

# Environment Setup
1. Download and install NodeJS [NodeJS](https://nodejs.org/en/download/package-manager)
2. Once NodeJS is installed open a Terminal (or open the repo in VS Code and open a Terminal window)
3. Install the testing modules using: `npm install --save-dev jest jsdom jest-environment-jsdom`
4. Install the required modules: `npm install create-react-app`
5. Create your React application: `npx create-react-app <MyAppName>`
6. Navigate to the newly create directory and install the Bootstrap React Module: `npm install react-bootstrap bootstrap`
7. You can now run the tests written in `index.test.js` by using VS Code testing UI or by running `npm test` in the Terminal
8. In order for the VS Code testing UI to appear you may have to restart VS Code.  The testing UI icon appears like a small beaker on the left side of the window
   
# Requirements

1. **Data:** Create a static array of ToDo items. Each ToDo item should be an object with the following properties: `title`, `description`, and `dueDate`.  Some content has been provided for you in `todoItems.js`.  

2. **ListGroup:** Use the `ListGroup` component from `react-bootstrap` to display the titles of the ToDo items. Each `ListGroup.Item` should be linked to a corresponding `Tab.Pane`.

3. **Tab:** Use the `Tab` component from `react-bootstrap` to display the descriptions and due dates of the ToDo items. Each `Tab.Pane` should be controlled by a corresponding `ListGroup.Item`.

4. **Color Coding:** Create a function that determines the color of a ToDo item based on its due date. The function should return a string that corresponds to one of the Bootstrap color variants (e.g., 'danger', 'warning', 'success', 'primary'). Use this function to apply a color to each `ListGroup.Item`.  The variants need to align with the following logic:
    * primary:due date > 7 days
    * success:due date < 7 days
    * warning:due date < 4 days
    * danger:due date < 2 days

5. **Editable Items:** Make the descriptions, and due dates of the ToDo items editable. For description, use the `contentEditable` attribute to achieve this.  For the due date use a date input.

6. **Header:** Add a header to the application with the text "Assignment 2: `Your Name` ToDo List".

7. **Form:** Add a form to the application with fields for adding a new ToDo item. The form should include a text input for the title, a date input for the due date, and a submit button. The form does not need to be functional.

8. **Styling:** All additional styling should be kept in a separate CSS file and imported into your application

# Tips

* Use the `Container`, `Row`, and `Col` components from `react-bootstrap` to layout your components.
* Use the `Form` and `Button` components from `react-bootstrap` to create the form.
* Use the `Tab.Container`, `Tab.Content`, and `Tab.Pane` components from `react-bootstrap` to create the Tab interface.
* Use the `ListGroup` and `ListGroup.Item` components from `react-bootstrap` to create the ListGroup interface.
* Use the `eventKey` prop and `href` prop to link the `ListGroup.Item` components to the `Tab.Pane` components.
* Use the `variant` prop to apply the color to the `ListGroup.Item` components.
* Use the `contentEditable` attribute to make the descriptions, and due dates editable.

# Resources
* [React Documentation](https://react.dev/learn)
* [React Bootstrap Documentation](https://react-bootstrap.github.io/docs/getting-started/introduction)
* [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
