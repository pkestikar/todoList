const initialModalState = {
    modalType: null,
    modalProps: {}
};

export default function modal(state = initialModalState, action) {
    if (action.type === 'SHOW_MODAL') {
        return  Object.assign({}, state, {
            ...state.modal,
            modalType: action.modalType,
            modalProps: action.modalProps
        });
    }
    else if (action.type === 'HIDE_MODAL') {
        return initialModalState;
    }

    return state;
}
