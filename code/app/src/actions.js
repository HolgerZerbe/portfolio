export const switchStyle = (linkValue, headerBGValue, navbarBGValue) => dispatch => {

    dispatch({
        type: 'SWITCH_STYLE',
        value: {
            link: linkValue,
            BG: headerBGValue,
            navBG : navbarBGValue
        }
    })
}


export const switchLanguage = (bolValue) => dispatch => {

    dispatch({
        type: 'SWITCH_LANGUAGE',
        value: bolValue
    })
}