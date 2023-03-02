import React, {useState} from 'react';

const Counter = () => {
    const [currentN,setCurrentN] = useState('1')
    const [state,setState]=useState(0);

    const OnPlus = (value:number) =>{
        setState(prev=>prev+value)
    }

    return (
        <div>
        <div>
            <input type="text" value={currentN}
            onChange={(e)=>setCurrentN(e.target.value)}
            />
        </div>
            <div>
                {state}
            </div>
            <div>
                <button onClick={()=>OnPlus(1)}>Plus 1</button>
                <button onClick={()=>OnPlus(1)}>Minus 1</button>
                <button onClick={()=>OnPlus(5)}>Plus 5</button>
                <button onClick={()=>OnPlus(5)}>Minus 5</button>
                <button onClick={()=>OnPlus(parseInt(currentN))}>
                    Plus N
                </button>
            </div>

        </div>
    );
};

export default Counter;