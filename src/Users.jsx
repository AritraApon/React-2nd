import { use } from "react"
import Use from "./Use"
export default function Users ({fetchUsers}) {
    const users = use(fetchUsers)
    return (
        <div className="card" >
            <h1>Users Info</h1>
            <div className="card-container">
                 {
                users.map(user => <Use key={user.id}  user={user}></Use> )
            }

            </div>

        </div>
    )
}