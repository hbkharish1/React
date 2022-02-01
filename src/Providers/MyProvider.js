import MyContext from '../MyContext';
import React, { Component} from "react";
class MyProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
        // cars:{ name: 'Honda', price: 100 }
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default MyProvider;
