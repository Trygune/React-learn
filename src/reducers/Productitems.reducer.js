const productreducer = (state, action) => {
    switch (action.type) {
        case 'Removed_From_Cart':
            return {
                ...state,
                added: false
            }
        case 'Added_To_Cart':
            return {
                ...state,
                added: true
            }
    }
}

export default productreducer;