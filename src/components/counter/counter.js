import React, {useState} from "react";
import ButtonClick from "./buttonClick";


export default function Counter() {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState('');
    function clickAumentar() {
        console.log('ClickAumentar');
        setInfo('Mudou');
        setCount(count + 1);
    }
    return (
        <>
            <p>Contador</p>
            <ButtonClick clickAumentar={clickAumentar} />
            <h3>Info: {info}</h3>
            <h3>Contador: {count}</h3>
        </>
    );
}
