const initialState = {
    nickName: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_CHANGE_NAME': {
            return {...state, nickName: action.nickName}
        }
        default : {
            return state
        }
    }
}