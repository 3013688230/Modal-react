import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalFooter from "./modalFooter";

const ModalDescription = styled.div`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0px;
  color: #002637;
  opacity: 1;
  text-transform: none;
`

const ModalView = ({
    modalTitle,
    modalDescription,
    children,
    show,
    onHideHandler,
    onActionHandler,
    cancelAltHandler = onHideHandler,
    isSendingDataToServer,
    size,
    actionButtonText,
    cancelButtonText,
    includeFooter,
    actionButtonDisabled,
    cancelButtonDisabled,
    centered,
    cancelButtonAvailable,
  }) => {
    const onHideButtonClick = () => {
      if (!isSendingDataToServer) onHideHandler()
    }

    return (
        <BootstrapModal
          size={size}
          show={show}
          onHide={onHideButtonClick}
          aria-labelledby="contained-modal-title-vcenter"
          centered={centered}
          backdrop="static"
        >
          <BootstrapModal.Header closeButton>
            <BootstrapModal.Title id="contained-modal-title-vcenter">
              <h3 className="container-title">{modalTitle}</h3>
              {modalDescription ? <ModalDescription>{modalDescription}</ModalDescription> : null}
            </BootstrapModal.Title>
          </BootstrapModal.Header>
          <BootstrapModal.Body style={{ padding: 0 }}>{children}</BootstrapModal.Body>
          {includeFooter ? (
            <div className="mt-4">
              <ModalFooter
                onCancelButtonClick={cancelAltHandler}
                onActionButtonClick={onActionHandler}
                isSendingDataToServer={isSendingDataToServer}
                actionButtonText={actionButtonText}
                cancelButtonText={cancelButtonText}
                actionButtonDisabled={actionButtonDisabled}
                cancelButtonDisabled={cancelButtonDisabled}
                cancelButtonAvailable={cancelButtonAvailable}
              />
            </div>
          ) : null}
        </BootstrapModal>
      )
    }
    
    ModalView.propTypes = {
      modalTitle: PropTypes.string,
      modalDescription: PropTypes.string,
      show: PropTypes.bool.isRequired,
      onHideHandler: PropTypes.func.isRequired,
      onActionHandler: PropTypes.func.isRequired,
      isSendingDataToServer: PropTypes.bool,
      size: PropTypes.string,
      actionButtonText: PropTypes.string,
      cancelButtonText: PropTypes.string,
      includeFooter: PropTypes.bool,
      actionButtonDisabled: PropTypes.bool,
      cancelButtonDisabled: PropTypes.bool,
      centered: PropTypes.bool,
      cancelButtonAvailable: PropTypes.bool,
    }
    
    ModalView.defaultProps = {
      modalTitle: '',
      modalDescription: '',
      isSendingDataToServer: false,
      size: 'lg',
      actionButtonText: '',
      cancelButtonText: 'Cancel',
      includeFooter: true,
      actionButtonDisabled: false,
      cancelButtonDisabled: false,
      centered: false,
      cancelButtonAvailable: true,
    }
    
    export default ModalView;