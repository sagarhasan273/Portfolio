import { Project } from '../types';

import sentimantAnalysisLSTMImage from '../assets/images/sentiment_analysis_lstm.png';
import pneumoniaDetaction from '../assets/images/pneumonia detection.jpg';


export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Lura',
    description: 'A fully responsive e-commerce platform with product catalog, shopping cart, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://sagarhasan273.github.io/e-commerce-lura/',
    githubUrl: 'https://github.com/sagarhasan273/e-commerce-lura'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A productivity app for organizing tasks, setting priorities, and tracking progress with real-time updates.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Pneumonia Detection from Chest X-rays using CNN (Image Classification)',
    description: 'Build a convolutional neural network (CNN) to classify chest X-ray images as normal or pneumonia-infected.',
    image: pneumoniaDetaction,
    category: 'ml',
    technologies: ['Figma', 'HTML/CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Real Estate Marketplace',
    description: 'A platform connecting property buyers, sellers, and agents with property listings and virtual tours.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['Next.js', 'PostgreSQL', 'MapBox', 'AWS'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'HealthKit'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {    id: 6,
    title: 'Sentiment Analysis on Movie Reviews with LSTM (Recurrent Neural Network)',
    description: 'Build a deep learning model that can classify movie reviews as positive or negative using an LSTM neural network.',
    image: sentimantAnalysisLSTMImage,
    category: 'ml',
    technologies: ['Figma', 'Adobe XD', 'Illustrator'],
    demoUrl: '#',
    githubUrl: '#'
  }
];