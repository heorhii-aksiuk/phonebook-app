import { redirect } from "react-router-dom"
import { selectUser} from '../store/selectors'

export default function PrivateRoute({ component: Component, redirectTo }) {

  return Component
}
