import { hot } from 'react-hot-loader'
import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import dog from './assets/dog.png'

function App() {

  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    
      const pacientesLS = JSON.parse( localStorage.getItem('pacientes') ) ?? [] ; // (??) nullish operator ()
      setPacientes(pacientesLS)
    

    // getLocalStorage();

      }, [])

  useEffect(() => {
    
      localStorage.setItem('pacientes', JSON.stringify( pacientes ))
    
  }, [pacientes])
  return (
    
    <div className="container mx-auto mt-20" >
      <img className="fixed w-1/4 -z-50 right-0 bottom-0" src={dog} alt="dog image" />
      <Header />
      
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        
        <ListadoPacientes 
        
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
          
        />
      </div>
    </div>
    
  )
}

export default App
