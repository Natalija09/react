import {BUY_CAKE} from './../constants/CakeConstants'

export const buyCake = (cake) => {
    return{
        type: BUY_CAKE,
        payload: cake

    }

}

export const refillCake = () => {
    return{
        type: "REFILL_CAKE",
        payload: 10
    }
}