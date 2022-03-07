import {  useSelector } from "react-redux"
// import operations from "../auth/authOperations"
import authSelectors from "../auth/authSelectors"
export default function UserMenu() {

    // const dispatch = useDispatch()
const name = useSelector(authSelectors.getUserName)


    return <div style={{display: "flex", alignItems: 'center'}}>
        <p>Hello {name} </p>
        {/* <button style={{height: "25px"}} type="button" onClick={() => {dispatch(operations.logOut())}}>Exit</button> */}
    </div>
}
