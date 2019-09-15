import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from 'Actions/modal';

const DefaultModal = props => {
    return (
        <div className="modal__default">
            <div>
                Hello, Welcome!
            </div>
            <div className="close" onClick={() => props.hideModal()}>
                <h2>click me to close this</h2>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal('DEFAULT_MODAL'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultModal);