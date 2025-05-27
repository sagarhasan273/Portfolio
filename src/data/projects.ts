import { Project } from '../types';

import sentimantAnalysisLSTMImage from '../assets/images/sentiment_analysis_lstm.png';
import pneumoniaDetaction from '../assets/images/pneumonia detection.jpg';
import algorithmVisualizerImage from '../assets/images/algorithm.png';
import weatherAppImage from '../assets/images/weatherapp.png';
import dskit from '../assets/images/ds-kit.png';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Lura',
    description: 'A fully responsive e-commerce platform with product catalog, shopping cart, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    demoUrl: 'https://sagarhasan273.github.io/e-commerce-lura/',
    githubUrl: 'https://github.com/sagarhasan273/e-commerce-lura'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A productivity app for organizing tasks, setting priorities, and tracking progress with real-time updates.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'NodeJs', 'MongoDB'],
    demoUrl: 'https://sagarhasan273.github.io/task-management-system/',
    githubUrl: 'https://github.com/sagarhasan273/task-management-system'
  },
  {
    id: 3,
    title: 'Pneumonia Detection from Chest X-rays using CNN (Image Classification)',
    description: 'Build a convolutional neural network (CNN) to classify chest X-ray images as normal or pneumonia-infected.',
    image: pneumoniaDetaction,
    category: 'ml',
    technologies: ['Python', 'CNN', 'TensorFlow', 'Keras'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'JavaScript Library for Data Structures and Algorithms',
    description: 'A lightweight and modular JavaScript/Node.js library that provides reusable data structures and algorithmic utilities — perfect for learning, interviews, or production use',
    image: dskit,
    category: 'npm',
    technologies: ['JavaScript', 'DSA'],
    demoUrl: 'https://www.npmjs.com/package/ds-saga-kit/',
    githubUrl: 'https://github.com/sagarhasan273/ds-saga-kit-javascript'
  },
  {
    id: 5,
    title: 'Algorithm Visualizer',
    description: 'Built a unique data structure and algorithm visualizer (e.g., Divide & Conquer, Sort, ) in React.',
    image: algorithmVisualizerImage,
    category: 'web',
    technologies: ['React.js', 'JavaScript', 'DSA'],
    demoUrl: 'https://sagarhasan273.github.io/Algorithm-Visualizer/',
    githubUrl: 'https://github.com/sagarhasan273/Algorithm-Visualizer'
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'Using Openweathermap API to get the data of weather and display them under fabulous UI.',
    image: weatherAppImage,
    category: 'web',
    technologies: ['ReactJs', 'OpenWeatherAPI', 'CSS'],
    demoUrl: 'https://sagarhasan273.github.io/Weather-app-react/',
    githubUrl: 'https://github.com/sagarhasan273/Weather-app-react'
  },
  {    id: 7,
    title: 'Sentiment Analysis on Movie Reviews with LSTM (Recurrent Neural Network)',
    description: 'Build a deep learning model that can classify movie reviews as positive or negative using an LSTM neural network.',
    image: sentimantAnalysisLSTMImage,
    category: 'ml',
    technologies: ['Python', 'LSTM', 'TensorFlow'],
    demoUrl: '#',
    githubUrl: '#'
  }
];