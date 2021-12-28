import {useState, useEffect} from 'react'
import Error from '../components/Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return fecha + random;
    }

    const [datosPaciente, setDatosPaciente] = useState({
        mascota: "",
        propietario: "",
        email: "",
        alta: "",
        sintomas: "",
        id : generarId()
    });

    const [error, setError] = useState(false)
    const [modoEditar, setModoEditar] = useState(false)

    useEffect(() => {
        if(Object.entries(paciente).length > 0) {

            setDatosPaciente(paciente)
            setModoEditar(true)
        }
    }, [paciente])
    
    const handleInput = (e) => {
        setDatosPaciente({...datosPaciente, [e.target.id] : e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(datosPaciente).some( el => el.trim() === "")) {
            setError(true);
            return;
        }
        
        if(!modoEditar) {
            setError(false)
            setPacientes([...pacientes, datosPaciente])
            
        } else {
            setError(false)
            const pacientesActualizado = pacientes.map(el => {
                if(el.id === datosPaciente.id) {
                    return datosPaciente
                } else {
                    return el
                }
            })
            setPacientes([...pacientesActualizado])
            setPaciente({})
            setModoEditar(false)
        }
        
        setDatosPaciente({
            mascota: "",
            propietario: "",
            email: "",
            alta: "",
            sintomas: "",
            id : generarId()
        })
        
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-center text-3xl'>Seguimiento pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''}
            <span className='text-indigo-600 font-bold '>Administralos</span>
            </p>

            <form 
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3'
                onSubmit={handleSubmit}
            >   
                { error && <Error mensaje="todos los campos son obligatorios"/> }
                <div className='mb-5'>
                    <label htmlFor="nombre-mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input
                        className='w-full rounded-md border-2 p-2 mt-2 placeholder-gray-400 ' 
                        id="mascota" 
                        placeholder="Nombre de la mascota"
                        type="text"
                        value={datosPaciente.mascota}
                        onChange={handleInput}  
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="nombre-propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
                    <input
                        className='w-full rounded-md border-2 p-2 mt-2 placeholder-gray-400 ' 
                        id="propietario" 
                        placeholder="Nombre del Propietario"
                        type="text"
                        value={datosPaciente.propietario}
                        onChange={handleInput} 
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
                    <input
                        className='w-full rounded-md border-2 p-2 mt-2 placeholder-gray-400 ' 
                        id="email" 
                        placeholder="Email"
                        type="text" 
                        value={datosPaciente.email}
                        onChange={handleInput} 
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
                    <input
                        className='w-full rounded-md border-2 p-2 mt-2 placeholder-gray-400 ' 
                        id="alta" 
                        type="date"
                        value={datosPaciente.alta}
                        onChange={handleInput}  
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea
                        className='w-full rounded-md border-2 p-2 mt-2 placeholder-gray-400 ' 
                        id="sintomas" 
                        placeholder="Describe los sintomas"
                        value={datosPaciente.sintomas}
                        onChange={handleInput} 
                    />
                    <input 
                        type="submit" 
                        className='bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all'
                        value={modoEditar ? 'Guardar Cambios' : "Agregar Paciente"}
                        
                        />
                </div>
            </form>
        </div>
    )
}

export default Formulario;
