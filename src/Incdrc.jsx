import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


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
                       <Tooltip title="Increment" arrow>
                        <Button onClick={incnum} className="btn_green"> <AddIcon /></Button>
                        </Tooltip>
                        
                        <Tooltip title="Decrement" arrow>
                        <Button onClick={drcnum} className="btn_red"> <DeleteIcon />
                        </Button>
                        </Tooltip>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Incdrc;