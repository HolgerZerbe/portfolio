const initialState = {
        productFound: false,
        product:{ id: 0, EAN: [], productname: null, hersteller : null, handelskette : null, productGroup: null, brennwertKCAL: null, kohlenhydrate : null, zucker: null, fett: null, gesaettigteFettsaeuren: null, natrium: null , protein: null, ballaststoffe: null, obstGemueseNuesseAnteil: null },
        arrayOfFoundProducts: [],
        error: 0,
        message: null 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_PRODUCT':

        return {
                product: action.value.product,
                error: action.value.error,
                message: action.value.message,
                arrayOfFoundProducts:[],
                productFound: true

        }

        case 'SEARCH_PRODUCT':

                return {...state, 
                        arrayOfFoundProducts: action.value.products,
                        error: action.value.error,
                        message: action.value.message

                }

        case 'SEARCH_BY_ID':

            return {...state, 
                    product: action.value.product,
                    error: action.value.error,
                    message: action.value.message,
                    arrayOfFoundProducts:[],
                    productFound: true
            }
            
        case 'SEND_AWAY_TO_CALCULATE':
        return {...state,
                product: action.value,
                error: 0,
                productFound: true}    


        case 'SET_PRODUCTFOUND_TO_FALSE':
            return {...state, 
                    productFound: action.value}        
                

        case 'EMPTY_ARRAYOFFOUNDPRODUCTS':
            return {...state, 
                    arrayOfFoundProducts: action.value}

        default: 
            return state;
    }
}

export default reducer;