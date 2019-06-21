# Machine Learning, Data Science and Deep Learning with Python

This folder contains the code and notes taken from [Machine Learning, Data Science and Deep Learning with Python](https://cern.udemy.com/data-science-and-machine-learning-with-python-hands-on) Udemy course.

## Requirements

- Anaconda Python environment.
- conda install ``pydotplus`` ``tensorflow``.

## Running code

From the course content directory run ``jupyter notebook`` and then got to [http://localhost:8080](http://localhost:8080) in your browser.

## Python review

Following there is a list of the reviewed characteristics. No in-depth notes were taken since it was already known.

- Lists: ``len()``, use ``[:]`` to slice a list, ``extend()``, ``append()``, ``sort(revers=False)``.
- Tuples: are like immutable lists e.g. ``tuple_ex = (1,2,3)``.
- Dictionary: A lookup table (~HashTable). ``get(key)``.
- Functions: Can receive a function as a parameter, ``lambda`` functions are supported.
- Boolean expressions/comparissons.

## Pandas review

- df --> DataFrame: ``head()``, ``tail()``, ``shape()``, ``size()`` <-- #columns*#rows, ``len()``, ``columns()``, ``df['columnName']``, ``df[[columnOne, columnTwo]]`` extracts two columns as a new df, ``df['columnName'][:]`` extracts a set of rows from a df, ``sort_values(df)``, ``value_counts()``, ``plot()``.