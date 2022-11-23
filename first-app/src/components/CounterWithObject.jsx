import { useState } from "react";

export default function CounterWithObject(){

const [count , setCount ] = useState({
    value:0 
});

return (
    <>
    <h2>{count.value}</h2>

    <button onClick={
        ()=>{
            if(count.value<10){
                     setCount( //set count function starts here
                        ()=>( //arrow function inside arrow function
                        { value:count.value + 1  } //change object value
                        ) // arrow function closes here
                        ) // set count function closes here

        }
    }//onClick arrow function closes here

    }> click me</button>
    </>

)

}