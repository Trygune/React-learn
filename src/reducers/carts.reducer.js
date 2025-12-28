const cartreducer = (state, action) => {
    let newcarts=[]
    console.log("action: ",action);
    console.log("state: ",state);
    switch (action.type) {
        case 'Added_To_Cart':
            newcarts=[
                    ...state.carts,
                    action.id
                ]
            localStorage.setItem('Carts',JSON.stringify(newcarts))
            return {
                ...state,
                carts:newcarts
            }
        case 'Removed_From_Cart':
            newcarts=state.carts
            newcarts.splice(
                state.carts.findIndex((cartid) => cartid === action.id),
                1
            )
            localStorage.setItem('Carts',JSON.stringify(newcarts))
            return {
                ...state
                ,carts:newcarts
            }
        
    }
}

export default cartreducer;