1. What problem does the context API help solve?
- Allows a child component to access the data in a parent components 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- *Actions:* Actions send data to the store from the app via payload.

- *Reducers:* Reducers take in the previous state and return the next state without mutating the original data.

- *Store:* Javascript Object that is a "single source" for the other objects to share and update state with Reducers, Actions and Payloads

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Application state is the state that is accessible to the entire application. Component State is only available to specific components in the app. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Allows you to return a function instead of an action object

1. What is your favorite state management system you've learned and this sprint? Please explain why!

-Context is a much easier concept to grasp. Redux is very complicated and convoluted for what is seemingly sucha simple and easy alternative.
