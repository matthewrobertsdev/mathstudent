import isMobile from '../../utilities/IsMobile'

const initialState = {
    topics: [], inputMap: {}, activeMap: {}, activeKey: '',
    inputArray: [], textStrings: [], creationStrings: [], instanceStrings: [], creationTeaching: {}, teachingObjectName: '',
    displayTeaching: false, displayKeyboard: false, paramaterLabels: [], pageNotFound: false, techingMap: {},
    activeMethod: '', methodTeacher: {}
};

export default function defaultReducer(state = initialState, action) {
    switch (action.type) {
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
        case 'GET_TOPICS': return { ...state, topics: action.topics };
        case 'GET_TEACHING': {
            if (action.creationTeaching === undefined) {
                console.log('teaching was null');
                return { ...state, pageNotFound: true };
            }
            return { ...state, teacher: action.creationTeaching, pageNotFound: false };
        }
        case 'CLEAR_TEACHING': return { ...state, teacher: action.teaching, pageNotFound: false };
        case 'CLEAR_CREATION_TEACHING': return { ...state, creationTeaching: {}, pageNotFound: false };
        case 'CLEAR_METHOD_TEACHING': return { ...state, methodTeacher: {} };
        case 'UPDATE_URL': return { ...state, URLpathname: action.URLpathname };
        case 'UPDATE_CREATION_STRINGS': return { ...state, creationStrings: action.creationStrings.slice() };
        case 'UPDATE_INSTANCE_STRINGS': console.log(action.instanceStrings); return { ...state, instanceStrings: action.instanceStrings.slice() };
        case 'SET_TEACHING_OBJECT': import(`../math${action.objectName}`).then(teachingObj => {
            return { ...state, creationTeaching: teachingObj };
        }).catch(function (error) {
            console.log(error);
            return state;
        }); return state;
        case 'SET_TEACHING_OBJECT_NAME': return { ...state, teachingObjectName: action.objectName };
        case 'SET_IS_MOBILE': return { ...state, isMobile: isMobile() };
        case 'SET_PARAMETER_LABELS': return { ...state, paramaterLabels: action.paramaterLabels };
        case 'UPDATE_SIMPLEST_FORM': return { ...state, simplestForm: action.simplestForm };
        default: return state;
    }
};