import { useContext } from 'react'
import LetrasContext from '../context/LetrasProvider'

const useLetras = () => {
    return useContext(LetrasContext) as any
}
export default useLetras