import { SHOW_MODAL, HIDE_MODAL } from "Constants";

export function showModal(modalType) {
    return {
        type: SHOW_MODAL,
        modalType: modalType
    }
}

export function hideModal(modalType) {
    return {
        type: HIDE_MODAL,
        modalType: modalType
    }
}
