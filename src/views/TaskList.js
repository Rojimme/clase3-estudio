import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCourse } from '../components/actions/TaskAction';
import { style_01 } from '../styles/style_01';

const TaskList = () => {
  const { availableCourses, selectedCourses } = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handlePress = course => {
    dispatch(toggleCourse(course));
  };

  const renderCourseList = (courses, backgroundColor, title) => (
    <View>
      <Text style={style_01.title}>{title}</Text>
      {courses.map((course, index) => (
        <TouchableOpacity key={index} style={{ ...style_01.barras, backgroundColor }} onPress={() => handlePress(course)}>
          <Text style={style_01.text}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View>
      {renderCourseList(availableCourses, '#0669BF', 'Cursos Disponibles')}
      {renderCourseList(selectedCourses, 'green', 'Cursos Seleccionados')}
    </View>
  );

  
};

export default TaskList;
