import MyContext from "../MyContext";
import Car from './Car';
const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <div>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </div>
        )}
    </MyContext.Consumer>
);
export default Cars;
