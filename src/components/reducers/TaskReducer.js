// src/components/reducers/TaskReducer.js

import { TOGGLE_COURSE } from '../actions/TaskActionTypes';

const INITIAL_STATE = {
  availableCourses: ['Matematicas', 'Ciencias', 'Sociales', 'Ingles', 'Español'],
  selectedCourses: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_COURSE:
      const course = action.payload;
      const isSelected = state.selectedCourses.includes(course);
      return {
        ...state,
        availableCourses: isSelected ? [...state.availableCourses, course] : state.availableCourses.filter(c => c !== course),
        selectedCourses: isSelected ? state.selectedCourses.filter(c => c !== course) : [...state.selectedCourses, course],
      };
    default:
      return state;
  }
};

export default coursesReducer;
