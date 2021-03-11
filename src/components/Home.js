import React from 'react'

function Home(props) {
    console.warn('Home', props)
    return (
        <div>
            <h1>This is a Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604343709000" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCardHandler({price:1000, name:"I-phone"})}>Add To Cart</button>
                    <button className="remove-btn" onClick={()=>props.removeToCardHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
