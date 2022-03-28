import React from 'react';


export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const totalPrice = cartItems.reduce((price, item) => price + item.price * item.qty, 0);
    const freeFreight = 259;


    return (
        <aside className="block col-1">
            <h2 className="layout">Varukorg</h2>

            <div>{cartItems.length === 0 && <div>Kundvagnen är tom</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x {item.price.toFixed(0)}kr
                    </div>
                </div>

            ))}
            {cartItems.length !== 0 && (
                <>

                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-2"><strong>Totalt</strong></div>
                        <div className="col-1 text-right"><strong>{totalPrice.toFixed(0)}kr</strong></div>
                    </div>
                    <hr/>
                    <div className="row">
                        <button onClick={() => alert('Tack för ditt köp!')}>
                            Köp
                        </button>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-2">{totalPrice >= 259 ? <p>Grattis! du får gratis frakt!</p> :
                            <p>Du har {freeFreight - totalPrice}kr kvar till gratis frakt!</p>}</div>
                    </div>
                </>
            )}

        </aside>


    );
}
            