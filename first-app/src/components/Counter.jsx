import { useState } from "react"

export default function Counter()
{

    const [counter,setCounter] = useState(0);
    const onIncrease = () => {

       counter<10? setCounter(counter + 1):setCounter(10); 
    }
    // const onDecrease = () => {
    //     setCounter(counter -1)
    // }
    return(
        <div style={{textAlign:"center",padding:"18px"}}>
            <h2>Counter</h2>
            <h3>{counter}</h3>
            <button onClick={onIncrease}>increase</button>
            <button onClick={() => {


                counter > 0 ?setCounter(counter -1) : setCounter(0);
    }}>Decrease</button>
        </div>

    )

}