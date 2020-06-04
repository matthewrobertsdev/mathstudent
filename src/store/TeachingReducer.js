import teachings from  '../model/Teachings'
import curriculum from '../model/Curriculum'

const initialState = {
    topics: teachings, curriculum: curriculum, pageNotFound: false, teacher: undefined
};

export default function teachingReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TEACHER': {
            if (action.payload === undefined) {
                console.log('teaching was null');
                return { ...state, pageNotFound: true };
            }
            return { ...state, teacher: action.payload, pageNotFound: false };
        }
        default: return state;
    }
};