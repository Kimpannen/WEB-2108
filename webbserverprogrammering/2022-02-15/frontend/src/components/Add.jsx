import {useState} from "react";
import CalcService from "../utils/api/services/CalcService";



const Add = () => {
    const [data, setData] = useState('innehåll')
    const [num1, setNum1] = useState(5)
    const [num2, setNum2] = useState(3)

    function fetchDataFromExternalApi() {
        CalcService.add(num1,num2)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }


    function displayData() {
            if (data.length !== 0) {
                return <h3>Response from API: "{ data }"</h3>
            }
        }

        function doSomething(){
        setData('doSomething')
        }




return (
        <>
        <h1>Add</h1>
            Numbers:
            <input type="number"
                   value={ num1 }
                   onChange={ event => setNum1(Number(event.target.value)) }/>
            <span> + </span>
            <input type="number"
                   value={ num2 }
                   onChange={ event => setNum2(Number(event.target.value)) }/>
            <br/>
            <button onClick={fetchDataFromExternalApi}>Get Result</button>
            { displayData() }
            { data ? <h3>Response from API "{ data }"</h3> : ''}
            {  data && <h3>Response from API "{ data }"</h3> }
            <button onClick={doSomething}>Do Something</button>

        </>
    )
}

export default Add

