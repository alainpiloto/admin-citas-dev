import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, setPacientes}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
        {pacientes.length > 0 ? (
        <>
        
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold '>Pacientes y Citas</span> 
            </p>
            { pacientes.map( paciente => 
                <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                pacientes={pacientes}
                setPacientes={setPacientes}
                />
            ) }
            
        
        </>
        ) : (
            <>
        
            <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Comienza agregando una cita  {''}
                <span className='text-indigo-600 font-bold '>y aparecerá abajo</span> 
            </p>
            { pacientes.map( paciente => 
                <Paciente 
                    paciente={paciente}
                />
            ) }
            
        
        </>
        )}

       </div>
    )
}

export default ListadoPacientes
