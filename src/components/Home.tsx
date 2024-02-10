import React from 'react'
import { useState } from 'react';

const Home = () => {
    const [Weight, setWeight] = useState<number>();
 
    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value*2.2*30/2);
        console.log(Weight);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Submitted")
    }


    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <h1 id='SpecialText'>ควรดื่มน้ำวันละเท่าไหร่?</h1>
                    <h1>{Weight?.toFixed(4)} มล.</h1>
                    <input type='text' id='weight' placeholder='Weigh (Kg)' name='weight' onChange={onChangeWeight}/>
                </form>
            </div>
        </>
    )
}

export default Home