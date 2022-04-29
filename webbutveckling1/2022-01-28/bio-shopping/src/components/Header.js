
export default function Header(props) {

    return (

        <header className="row block center">
            <div>
                <a>
                    <h1>Kimmie's Musikhandel</h1>
                </a>
            </div>

            <div>
                <a>
                    Antal varor
                    {props.countCartItems ? (<h1>{props.countCartItems}</h1>
                    ) : (
                        ''
                    )}
                </a>

            </div>


        </header>
    );
}

