import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart, removeToCart} from '../Services/Actions/action'


const mapStateToProps=state=>({
    data: state.cardItems
})

const mapDispatchToProps = dispatch =>({
    addToCardHandler:data=>dispatch(addToCart(data)),
    removeToCardHandler: data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)


//export default Home