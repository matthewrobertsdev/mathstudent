import teachings from  '../model/Teachings'
import curriculum from '../model/Curriculum'

const initialState = {
    topics: teachings, curriculum: curriculum, inputArray: [], textStrings: [], creationStrings: [], instanceStrings: [], creationTeaching: {hello: "abcd"}, teachingObjectName: '',
    displayTeaching: false, paramaterLabels: [], pageNotFound: false, activeMethod: '', methodTeacher: {}
};

export default function teachingReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FOUND': return {...state, pageNotFound: false}
        case 'SET_DISPLAY_TEACHING': return { ...state, displayTeaching: action.isDisplayed };
        case 'UPDATE_ACTIVE_METHOD': return { ...state, activeMethod: action.activeMethod };
        case 'CREATE_TEACHING_OBJECT':
            const newTeaching = {};
            Object.assign(newTeaching, action.teaching)
            return { ...state, teacher: newTeaching };
        case 'CREATE_METHOD_TEACHER':
            const newMethodTeaching = {};
            Object.assign(newMethodTeaching, action.methodTeacher)
            return { ...state, methodTeacher: newMethodTeaching };
        case 'GET_TOPICS': return { ...state, topics: action.payload };
        case 'SET_TEACHER': {
            if (action.payload === undefined) {
                console.log('teaching was null');
                return { ...state, pageNotFound: true };
            }
            return { ...state, teacher: action.payload, pageNotFound: false };
        }
        case 'CLEAR_TEACHING': return { ...state, teacher: action.teaching, pageNotFound: false };
        case 'CLEAR_CREATION_TEACHING': return { ...state, creationTeaching: {}, pageNotFound: false };
        case 'CLEAR_METHOD_TEACHING': return { ...state, methodTeacher: {} };
        case 'UPDATE_CREATION_STRINGS': return { ...state, creationStrings: action.creationStrings.slice() };
        case 'UPDATE_INSTANCE_STRINGS': console.log(action.instanceStrings); return { ...state, instanceStrings: action.instanceStrings.slice() };
        /*case 'SET_TEACHER': import(`../model/mathteachers/math/${action.payload}`).then(teachingObj => {
            console.log(teachingObj);
            return { ...state, creationTeaching: {bye: "123"} };
        }).catch(function (error) {
            return state;
        }); */
        case 'SET_TEACHING_OBJECT_NAME': return { ...state, teachingObjectName: action.payload };
        case 'SET_PARAMETER_LABELS': return { ...state, paramaterLabels: action.paramaterLabels };
        case 'UPDATE_SIMPLEST_FORM': return { ...state, simplestForm: action.simplestForm };
        default: return state;
    }
};