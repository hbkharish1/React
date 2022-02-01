import React, {Component} from 'react'
// import {Button} from 'semantic-ui-react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
increaseCount,
decreaseCount,
Reset
} from '../Actions/Counter'
class Counter extends Component {
static mapStateToProps = state => {
return {
count: state.count
}
}
static mapDispatchToProps = dispatch => {
return bindActionCreators({
increaseCount,
decreaseCount,
Reset
},
dispatch
)
}
render() {
const { increaseCount, decreaseCount,Reset} = this.props
return(
<div>
<Button onClick={decreaseCount}>-</Button>
<span>{this.props.count}</span>
<Button onClick={increaseCount} >+</Button>
<br/>
<Button  onClick={Reset}> Reset </Button>
</div>
)
}
}
export default connect(
Counter.mapStateToProps,
Counter.mapDispatchToProps
)(Counter)