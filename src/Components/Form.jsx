import { useState } from "react"
import FormStyles from "../Styles/Form.module.css"
import Card from "./Card"

const Form = () => {

  // Estados
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    apellido: "",
    marcaAuto: ""
  })
  const [listEstudiantes, setListEstudiantes] = useState([])
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  // Handlers - Eventos
  const handleNombre = (e) => setEstudiante({
    ...estudiante, nombre: e.target.value})
  const handleApellido = (e) => setEstudiante({
    ...estudiante, apellido: e.target.value})
  const handleAuto = (e) => setEstudiante({
    ...estudiante, marcaAuto: e.target.value})
  
  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if(
        estudiante.nombre.trim().length > 3 &&
        estudiante.apellido.trim().length > 5 &&
        estudiante.marcaAuto.trim().length > 3
    ){
        setListEstudiantes([...listEstudiantes, estudiante])
        setShow(true)
        setError(false)
        // Limpiar los campos de entrada
        setEstudiante({
            nombre: "",
            apellido: "",
            marcaAuto: ""
        })
    } else {
        setError(true)
    }
}  

  return (
    <>
      <form className={FormStyles.formulario} onSubmit={handleSubmit}>
        <input type="text" value={estudiante.nombre} onChange={handleNombre} placeholder="Ingresa tu nombre"/>
        <input type="text" value={estudiante.apellido} onChange={handleApellido} placeholder="Ingresa tu apelliddo"/>
        <input type="text" value={estudiante.marcaAuto} onChange={handleAuto} placeholder="Que marca de auto prefieres?"/>
        <button>Enviar</button>
      </form>

        {show && <Card estudiantes={listEstudiantes} />}
        {error && (
        <p className={FormStyles.msjError}>
          Por favor chequea que la información sea correcta
        </p>
      )}

    </>
  )
}

export default Form