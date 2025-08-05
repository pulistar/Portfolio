import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hello_world: 'Hello World',
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      about: 'About Me',
      proyectos_title: 'Projects', 
      github: 'GitHub', 
      demo: 'Demo',
      download_cv: 'Download CV',
      proyecto_corazon: 'HEART SYSTEM', 
      proyecto_hoja: 'LEAF SYSTEM', 
      proyecto_noche: 'NIGHT SYSTEM', 
      proyecto_robot: 'ROBOT SYSTEM',
      hello_text: 'Hello, I am',
      software_engineer: 'Software Engineer',
      innovative_ideas: 'With innovative ideas',
      about_description: 'I am a passionate software engineer with experience in full-stack development. I love creating innovative solutions and learning new technologies.',
      about_description_es: 'Soy un ingeniero de software apasionado con experiencia en desarrollo full-stack. Me encanta crear soluciones innovadoras y aprender nuevas tecnologías.',
      experience_years: 'Years of Experience',
      projects_completed: 'Projects Completed',
      technologies_used: 'Technologies Used',
      view_project: 'View Project',
      contact_me: 'Contact Me',
      get_in_touch: 'Get in Touch',
      send_message: 'Send Message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      full_stack: 'Full Stack Developer',
      frontend: 'Frontend Developer',
      backend: 'Backend Developer',
    },
  },
  es: {
    translation: {
      hello_world: 'Hola Mundo',
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contactos',
      about: 'Sobre Mí',
      proyectos_title: 'Proyectos', 
      github: 'GitHub', 
      demo: 'Demo', 
      download_cv: 'Descargar CV',
      proyecto_corazon: 'SISTEMA DEL CORAZÓN',
      proyecto_hoja: 'SISTEMA DE LA HOJA', 
      proyecto_noche: 'SISTEMA DE NOCHE', 
      proyecto_robot: 'SISTEMA DE ROBOT', 
      hello_text: 'Hola, soy',
      software_engineer: 'Ingeniero de software',
      innovative_ideas: 'Con ideas innovadoras',
      about_description: 'Soy un ingeniero de software apasionado con experiencia en desarrollo full-stack. Me encanta crear soluciones innovadoras y aprender nuevas tecnologías.',
      about_description_es: 'Soy un ingeniero de software apasionado con experiencia en desarrollo full-stack. Me encanta crear soluciones innovadoras y aprender nuevas tecnologías.',
      experience_years: 'Años de Experiencia',
      projects_completed: 'Proyectos Completados',
      technologies_used: 'Tecnologías Utilizadas',
      view_project: 'Ver Proyecto',
      contact_me: 'Contáctame',
      get_in_touch: 'Ponte en Contacto',
      send_message: 'Enviar Mensaje',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      full_stack: 'Desarrollador Full Stack',
      frontend: 'Desarrollador Frontend',
      backend: 'Desarrollador Backend',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
