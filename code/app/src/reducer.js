const initialState = {
        german: true,
        linkStyle : "linkColor1",
        headerStyle : "headerColor1",
        navbarStyle : "navBgTrans"
    }

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SWITCH_LANGUAGE':
            return {...state, 
                    german: action.value
                }

        case 'SWITCH_STYLE': 
            return {...state,
                    linkStyle: action.value.link,            
                    headerStyle: action.value.BG,
                    navbarStyle: action.value.navBG
                }
        default: 
            return state;
    }
}


export default reducer;