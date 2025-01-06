import {useState} from "react"
function Cat(){
    let[count,setCount]=useState(0)
    let[name,setName]=useState('Indhu')
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button>
            <div>
                <input type="text" placeholders="Enter here" onChange={(e)=> setName(e.target.value)}/>
                <h1>Name:{name}</h1>
            </div>
        </div>
    )
}
export default Cat;