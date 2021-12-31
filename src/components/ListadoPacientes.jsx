import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import Paciente from './Paciente'
import filter from '../assets/filter.png'

const ListadoPacientes = ({pacientes, setPaciente, setPacientes}) => {
   
    const [pacienteBuscado, setPacienteBuscado] = useState('');
    const [pacientesFiltrados, setPacientesFiltrados] = useState([...pacientes]);
    const [modoBuscar, setModoBuscar] = useState(false)

  

    useEffect(() => {
        if(pacienteBuscado === '') {
            setModoBuscar(false)
        } else {
            setModoBuscar(true)
        }
        handleSearch()

      

    }, [pacienteBuscado,pacientes])
    
    const handleSearch = () => {
        const resultadoBusqueda = pacientes.filter( paciente => {
            if(paciente === "") {
                return paciente
            }
            if(paciente.mascota.toLowerCase().includes(pacienteBuscado.toLowerCase())) {
                return paciente;
            } 
        })

        setPacientesFiltrados([...resultadoBusqueda])
        
        
    }

    return (
        <div className="md:w-1/2 lg:w-3/5 ">
        
        

        {pacientes.length > 0 ? (
        <div >
            <div className='sticky top-0 bg-gray-100 pb-4 md:static pt-4 md:pt-0'>
                <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                <p className='text-xl mt-5 mb-10 text-center'>
                    Administra tus {''}
                    <span className='text-indigo-600 font-bold '>Pacientes y Citas</span> 
                </p>
                <div className='mx-3 flex  ' >
                    <img className="self-center mx-2" src={filter} alt="filer-icon" />   
                    <input 
                        type="text"
                        className='border-2 rounded-md  py-2 px-2 grow'
                        placeholder='Nombre de la mascota a buscar'
                        onChange={e => {
                            setPacienteBuscado(e.target.value);
                            }}
                        />
                    
                    {/* <button 
                        type='button'
                        className='bg-blue-600 hover:bg-blue-700 font-bold text-sm w-1/6 py-2 mx-1 rounded-md text-white'
                        onClick={handleSearch}
                        >Buscar
                    </button> */}
                </div>
            </div>
            { modoBuscar && pacientesFiltrados.length === 0 && <p className='text-center text-red-500 pb-8'>No se encontraron coincidencias</p>}

        
            <div className='md:h-screen md:overflow-y-scroll'>
                { !modoBuscar ?pacientes.map( paciente => 
                        <Paciente 
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        pacientes={pacientes}
                        setPacientes={setPacientes}
                    /> )
                
                : pacientesFiltrados.map( paciente => 
                        <Paciente 
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        pacientes={pacientes}
                        setPacientes={setPacientes}
                    />
                )
                }
                
            </div>
        </div>
        ) : (
            <>
        
            <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Comienza agregando una cita  {''}
                <span className='text-indigo-600 font-bold '>y aparecerá abajo</span> 
            </p>
            
            
        
        </>
        )}

       </div>
    )
}

export default ListadoPacientes
