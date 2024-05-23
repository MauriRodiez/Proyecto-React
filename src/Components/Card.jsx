import CardStyle from "../Styles/Card.module.css"

const Card = ({estudiantes}) => {
  return (
    <ul className={CardStyle.boxCard}>       
          {estudiantes.map( (estudiante, index) => (
            <li key={index}>
                Hola {estudiante.nombre} {estudiante.apellido} !
                <br/> Nos encanta saber que tu marca favorita es <br/>
                <span className={CardStyle.car}>{estudiante.marcaAuto}</span>
            </li>
        ))}    
    </ul>
  )
}

export default Card