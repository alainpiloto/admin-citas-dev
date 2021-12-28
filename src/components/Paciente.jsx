import React from 'react'

const Paciente = ({paciente, setPaciente, pacientes, setPacientes}) => {
    const { mascota, propietario, email, alta, sintomas} = paciente;

    const handleDelete = () => {
        const pacientesActualizado = pacientes.filter( el => el.id !== paciente.id)
        setPacientes([...pacientesActualizado])
    }

    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{mascota}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
                <span className='font-normal normal-case'>{alta}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>    
            <div className='flex justify-between mt-8'>
                <button
                    type="button"
                    onClick={() => setPaciente(paciente)}
                    className="px-8 bg-indigo-600 hover:bg-indigo-800 text-white text-md font-bold uppercase rounded-lg"
                >
                    editar
                </button>
                <button
                    type="button"
                    className="py-2 px-8 text-md bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                    onClick={ handleDelete }
                >
                    eliminar
                </button>
            </div>
        </div>
            
    )
}

export default Paciente
