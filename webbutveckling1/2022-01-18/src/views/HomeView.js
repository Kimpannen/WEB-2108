import { useNavigate } from 'react-router-dom'

export default function HomeView() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/other')
    }

    return (
        <>
            <h1>HomeView</h1>
            <button onClick={ handleClick }>OtherView</button>
        </>
    )

}