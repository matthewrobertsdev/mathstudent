/*
const initialState = { inputMap: {}, activeKey: '', displayTeaching: false, displayKeyboard: false
};
export default function inputReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_VALUE': let newValue = ''
            if (action.key === '{enter}') { return { ...state, displayKeyboard: false } }
            else if (action.key === '{space}') { newValue = state.inputMap[state.activeKey] += ' ' }
            else if (action.key === '{bksp}') {
                if (state.inputMap[state.activeKey].length >= 1) {
                    newValue = state.inputMap[state.activeKey].slice(0, -1);
                }
            }
            else { newValue = state.inputMap[state.activeKey] += action.key }
            return { ...state, inputMap: { ...state.inputMap, [state.activeKey]: newValue } };
        case 'UPDATE_KEY_AND_VALUE':
            return { ...state, inputMap: { ...state.inputMap, [action.key]: action.value } };
        case 'UPDATE_ACTIVE_KEY': return { ...state, activeKey: action.key };
        case 'UPDATE_DISPLAY_KEYBOARD': return { ...state, displayKeyboard: action.displayKeyboard };
        default:
            return state
    }
}
*/