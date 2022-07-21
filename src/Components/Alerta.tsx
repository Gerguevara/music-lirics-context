import { Props } from "../interfaces/contextInterface"

const Alerta = ({children}: Props) => {
  return (
    <div className="alerta">{children}</div>
  )
}

export default Alerta