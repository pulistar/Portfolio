import AnimacionFondo from './Animacion-fondo';
import Contactos from './Contactos';
import Habilidades from './Habilidades';
import Inicio from './Inicio';
import Menu from './Menu';
import Proyectos from './Proyectos';
import SobreMi from './SobreMi';


function App() {
  return (

    <div className='relative min-h-screen'>

      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-black/80 to-transparent">
        <Menu />
      </header>

      <AnimacionFondo/>
      <main className="relative z-10"> 
        <Inicio/>
        <SobreMi/>
        <Proyectos/>
        <Habilidades/>
        <Contactos/>  
      </main>
    
    </div>
  );
}

export default App;


