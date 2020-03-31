import isMobile from '../../utilities/IsMobile'

const initialState = {
    URLpathname: 'https://mathteacher.com',
    isMobile: false
};

export default function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_URL': return { ...state, URLpathname: action.payload };
        case 'SET_IS_MOBILE': return { ...state, isMobile: isMobile() };
        default: return state;
    }
};