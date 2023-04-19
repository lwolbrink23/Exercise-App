# Exercise-App

## GitHup Pages Site
https://lwolbrink23.github.io/Exercise-App/ 


## Explanation

This Exercise App is a React Native application that allows users to track the reps or a timestamp of an exercise. In this application, the user can save reps or timestamps in a list of previous recordings and they have the ability to keep track of a list of previous exercises that they’ve finished. The data recorded is saved through state variables and every page is rendered through React Native elements. 

This app uses five components: DurationExercise.jsx, Home.jsx, Logs.jsx, Register.jsx, and RepetitionExercise.jsx. Each component can be navigated through a react-navigation module through App.js.

In the Register component, a user is asked to enter some input regarding their first name, last name, and age before proceeding to the Home component. In the Home component, a user can select between five different exercises rendered as buttons through an array called data. Each object in the data array contains a component, title, suggested, and id property. When the user clicks on an exercise that is recorded through reps, they are sent to the Repetition component. If the user clicks on an exercise that can be recorded by the time, they would be sent to a Duration component. The name of the exercise clicked can be passed into the specific component as a prop. In the Home component, the user can also navigate to the Logs component, where they can track an exercise in a list. The user must select an exercise from a dropdown menu, and can add notes if they desire. The user then clicks an “Add” button that adds the exercise to the list as a state variable, saved in AsyncStorage. The user can also decide to delete all the items in the list as well.
