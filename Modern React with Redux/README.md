# Modern React with Redux

## Course

- Code: https://github.com/StephenGrider/redux-code


## Concepts

- A **React Object** is Something that goes in between braces. For example ``objectOne = {}``.
- A **React Component** can be built from a JavaScript function or a class. They allow us to show content on the screen, handle an event, etc.
- **React DOM** knows how to take a component and make it show up in the DOM.
- **JSX** is JavaScript dialect that allows us to write normal HTML to be interpreted by a React App.
- **Babel** is a JS package that translates JS code from one standard (e.g. ES2015) into a less modern and more supported one (e.g. ES5). 

## Directories

- **Src** contains all the source code of the application.
- **Public** stores static files (Images, etc.).
- **package.json** records our project dependencies and configures our project.
- **package-lock.json** records the *exact* version of packages that our project installs.
- node_modules, README.md...

## JSX

First curly braces to specify that we are going to reference a JS variable. The second curly braces is for the JS object itself.

``` JavaScript
style={{backgroundColor: 'red'}}
```

### Troubleshooting

*Objects are not valid as a React child** happens when you are trying to show a react object as text (inside a react component).

### Conventions

- Property names remove dashes and substitute by camelCase.
- Double quotes are used for strings (labels, ids, types, etc.).
- Single quotes are used for non JSX properties (styles, etc.).
- ``class`` changes by ``className``. ``class`` is a reserved keyword.
- Components are located in a file with its same name. The name is writen in PascalCase.

## Components

- Nesting: Place one or more components inside others.
- Reusability: Be able to reuse the code of them.
- Configuration: Make them configurable.
- To make components available in other files we need to ``export`` them.
- Lifecycle: 
  - ``constructor``: Created. Guidelines advice not to do data loading here.
  - ``render``: Shown in the browser. Avoid doing anything but returning JSX code (No network, no heavy actions). Avoid doing conditional rendering.
  - ``componentDidMount``: Called only the first time the component shows up.
  - ``componentDidUpdate``: Called each time the component gets updated, right after the ``render`` method.
  - ``componentWillUnmount``: Call only the last time before unmounting the component.

  Others (rarely used ones): ``shouldComponentUdate``, ``getDerivedStateFromProps`` and ``getSnapshotBeforeUpdate``. 

## CSS and styling

- Add CSS stylesheets by using a CDN in a ``link`` element inside the ``public/index.html``.
- `${icon} test` is a string template, it will get whatever is inside (value) of ``icon`` and put it inside the screen.

## Props

System for passing data from a parent to a child component, with the goal of customazing the child (looks or event handling).

- The properties are set up as any other HTML property and can have any name/key.
- The child can access them as the first argument of the function.
- The child can be a component passed as an inner JSX component. It will appear in the parent as ``props.children``. These children can be plain text, JSX components, etc.
- Defataul component props are in ``componentName.defaultProps{}``.

## State

Contains some data only relevant to the component it is in.

- Update/Re-rendering is alsmost real-time when using state.
- Must be initialized when creating the component.
- Can only be updated using the function ``setState()``. Never use direct assignments.
- Additive process. No need to ecify all keys of the dict when updating one of them.

## Functional componenets vs class components

- Functional components for simple content
- Class components for everything else (user input, network requests...)

### Class

- Easier to understand.
- Can use ``state`` --> Easier to handle user input.
- Understand lifecycle events --> Easier to do start-up tasks.
- When in need of callback results affecting what's displayed in the page.

### Functional

- Can use ``state`` only via ``hooks``.