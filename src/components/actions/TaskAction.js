
import { TOGGLE_COURSE } from './TaskActionTypes';

export const toggleCourse = courseId => {
  const action = {
    type: TOGGLE_COURSE,
    payload: courseId 
  };
  return action;
};