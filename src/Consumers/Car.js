const Car = props => (
<div>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
        </div>
);
export default Car;
