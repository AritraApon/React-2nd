import counter from './counter'
import ShowHide from './ShowHide';
import Users from './Users';
import './App.css'
import Click from './counter'
import { Suspense } from 'react';


const load  = async() => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

function App() {
  const fetchUsers = load();
  return (
    <div>
      <ShowHide></ShowHide>
      <Click></Click>



      <Suspense>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

    </div>
  )
}

export default App
