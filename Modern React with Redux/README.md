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

- **Objects are not valid as a React child** happens when you are trying to show a react object as text (inside a react component).
- **this** is the one that calls the function e.g. ``truck.getSound()``, this becomes ``truck``, and therefore every call to ``this`` inside the ``getSound()`` function will reference to ``truck``. If there is nothing calling the function (e.g. ``getSound()``) ``this`` will resolve to ``undefined``. This is the case in event handlers since inside JS the ``this`` specified during assignment of the handler is "ripped off" at some point calling the function without it (and causing the ``undefined`` error).

### Conventions

- Property names remove dashes and substitute by camelCase.
- Double quotes are used for strings (labels, ids, types, etc.).
- Single quotes are used for non JSX properties (styles, etc.).
- ``class`` changes by ``className``. ``class`` is a reserved keyword.
- Components are located in a file with its same name. The name is writen in PascalCase.
- Import statements for packages or libraries go above local files.
- Component lists elements must have an **unique id**, in the **key** property, to ensure correct behaviour on reorder/update operations.

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
- Communication child-parent via callbacks passed via ``props``.

### Functional

- Can use ``state`` only via ``hooks``.

## Handling user input

- When assigning a callback function in a JSX component we do not put the final ``()`` since that would make the function be called **each time the render function is called**.
- Some callback events: ``onClick``, ``onChange``, ``onSumbit``.
- ``Uncontrolled`` components stores the data outside the *React World* (e.g. in the HTML tag, meaning in the DOM), while ``controlled`` components store it inside the *React World* (e.g. the state object).
- To avoid ``undefined`` errors due to context resolving of ``this``, we can ``bind`` a function in the constructor or using an arrow function (this latter ones have automatic binding).

## REST requests

- ``Axios`` is highly recommended over its lower lever competitor ``fetch``.
- For asynchronous queries we can use the ``.then()`` when working with promises, or mark the function as ``async`` and use the ``await`` primitive.

## ``map`` statements

A ``map`` function will create a new array applying a function to each one of the elements of the calling array.

``` JavaScript

const numbers = [0, 1, 2, 3, 4];

const mulNumbers = const mulNumbers = numbers.map( (num) => {
    return num * 10;
})

// numbers = [0, 1, 2, 3, 4];
// mulNumbers = [0, 10, 20, 30, 40];
```

Objects can also be flattened. Imagine the case of the object "Person" with attributes "name", "age" and "gender", in the arrow function we can specify only the ones needed and React will do the flattening form "Person" to these attributes.

``` JavaScript
people.map( ({name, age}) => {
    return new Person(name.toUpperCase(), age/10, "No Gender")
})
```

## ``Refs``

React ``Refs`` - References - give access to a single DOM element.

1. Create refes in the constructor.
2. Assign them to instance variables.
3. Pass to a particular JSX element as props.