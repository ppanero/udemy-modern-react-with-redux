# ReactJS Tic-Tac-Toe

## Setup the development environment

``` bash
$ yum install epel-release
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
$ yum install nodejs
$ node -v
$ npm -v
```
## Create a ReactJS application

``` bash
$ npx create-react-app my-app
```

## Followe the tutorial

[...]

## Troubleshoot

**Canon kill dependencies problems**:

``` bash
$ npm install -g npm@latest
$ rm -rf ~/node/lib/node_modules/
$ npm install
```

**Arrow functions**:

Notice how with ``onClick={() => alert('click')}``, we’re passing a function as the onClick prop. React will only call this function after a click. Forgetting ``() =>`` and writing ``onClick={alert('click')}`` is a common mistake, and would fire the alert every time the component *re-renders*.

## Notes

- Component: 
  - In: ``props``. Accessed in the child component by ``this.props.<nameOfProp>
  - Out: hierarchy of views from ``render()``, which returns a **React element**. ``JSX`` allows to define React elements with HTML tags and JavaScript code.
- Function component: Those that only contain a ``render`` method and no state (e.g. ``Square``).
- ``Key`` is a special and reserved property in React. ven though key may look like it belongs in props, ``key`` cannot be referenced using ``this.props.key``. React automatically uses ``key`` to decide which components to update. A component cannot inquire about its ``key``. Keys do not need to be globally unique; they only need to be unique between components and their siblings.
- State: To allow components to remmeber state use ``this.state``.
- Constructors: When subclassing, always call ``super(props)`` at the beginning of it.
- Naming convention:  In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.
- Immutability:
  - Allows tracking and saving history of actions.
  - Makes detecting changes less costly.
  - Since we can easily detect changes, we can easily know when to re-render a component. More about ``shouldComponentUpdate()`` [here](https://reactjs.org/docs/optimizing-performance.html#examples).