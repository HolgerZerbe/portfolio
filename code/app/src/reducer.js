const initialState = {
        german: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {


        // case 'LOAD_PRODUCT':

        // return {
        //         product: action.value.product,
        //         error: action.value.error,
        //         message: action.value.message,
        //         arrayOfFoundProducts:[],
        //         productFound: true

        // }

        // case 'SEARCH_PRODUCT':

        //         return {...state, 
        //                 arrayOfFoundProducts: action.value.products,
        //                 error: action.value.error,
        //                 message: action.value.message

        //         }

        // case 'SEARCH_BY_ID':

        //     return {...state, 
        //             product: action.value.product,
        //             error: action.value.error,
        //             message: action.value.message,
        //             arrayOfFoundProducts:[],
        //             productFound: true
        //     }
            
        // case 'SEND_AWAY_TO_CALCULATE':
        // return {...state,
        //         product: action.value,
        //         error: 0,
        //         productFound: true}    
      
                

        case 'SWITCH_LANGUAGE':
            return {...state, 
                    german: action.value}

        default: 
            return state;
    }
}

export default reducer;