import warning from '../assets/warning.png'

const DeleteModal = ({setDeletingMode, pacientes, pacienteAEliminar,setPacientes}) => {

    
    const handleDelete = () => {
            
        const pacientesActualizado = pacientes.filter( el => el.id !== pacienteAEliminar)
        setPacientes([...pacientesActualizado])
        setDeletingMode(false)
    }

    return (
        <div className="w-full h-screen absolute top-0 right-0 flex justify-center items-center">
            <div className="h-72 w-96 bg-violet-100 flex flex-col rounded-md justify-center items-center shadow-md">
                <img className="w-1/5 pb-4" src={warning} alt="warning icon" />
                <p className="font-bold text-lg">¿Estás seguro de eliminar esta Cita?</p>
                    <div className="">
                        <button 
                            className="m-5 bg-red-500 rounded-md p-2 text-base text-white"
                            onClick={handleDelete}
                            >Eliminar
                        </button>
                        <button 
                            className="m-5 bg-blue-500 rounded-md p-2 text-base text-white"
                            onClick={() => setDeletingMode(false)}
                        >Cancelar</button>
                    </div>
                </div>
            </div>
    )
}

export default DeleteModal
