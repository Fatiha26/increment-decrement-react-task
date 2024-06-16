import React, { useState } from 'react'


const Incdrc = () => {

    const [num, setNum] = useState(0);

    const incnum = () => {
        setNum(num+1);
    }

    const drcnum = () => {
        if(num >0)
            {
                setNum(num-1);
            }
        else{
            alert("Sorry! Zero limit reached!")
            setNum(0);
        }
    }


    return (
        <>
            <div className='main_div'>
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <button onClick={incnum}>Increment</button>
                        <button onClick={drcnum}>Decrement</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Incdrc;