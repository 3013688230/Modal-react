import { Modal as BootstrapModal, Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'

import React from 'react'

const ModalFooter = ({
  onCancelButtonClick,
  onActionButtonClick,
  isSendingDataToServer,
  actionButtonText,
  cancelButtonText,
  actionButtonDisabled,
  cancelButtonDisabled,
  cancelButtonAvailable,
}) => (
  <BootstrapModal.Footer style={{ padding: '0 1rem 1rem 0' }}>
    { cancelButtonAvailable && (
    <button
      type="button"
      className="btn btn-outline btn-sm"
      disabled={cancelButtonDisabled}
      onClick={onCancelButtonClick}
    >
      {cancelButtonText}
    </button>
    )}
    <button
      type="button"
      disabled={actionButtonDisabled}
      className="btn btn-primary btn-sm ml-4"
      data-testid="modal-action-button"
      onClick={() => {
        if (!isSendingDataToServer) onActionButtonClick()
      }}
    >
      {!isSendingDataToServer ? (
        <span>{actionButtonText}</span>
      ) : (
        <Spinner animation="border" variant="success" />
      )}
    </button>
  </BootstrapModal.Footer>
)

ModalFooter.propTypes = {
  onCancelButtonClick: PropTypes.func.isRequired,
  onActionButtonClick: PropTypes.func.isRequired,
  isSendingDataToServer: PropTypes.bool.isRequired,
  actionButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  actionButtonDisabled: PropTypes.bool.isRequired,
  cancelButtonDisabled: PropTypes.bool.isRequired,
  cancelButtonAvailable: PropTypes.bool.isRequired,
}

export default ModalFooter;