import { useNavigate } from "react-router-dom";

export default function OtherView() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
    return (
        <>
        <h1>OtherView 15:20 i videon del 2</h1>
            <button onClick={ handleClick }>HomeView</button>
        </>
    )
}