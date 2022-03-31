import React from 'react'
import Modal from '@mui/material/Modal'

const Modal = () => {
  return (
    <Modal
        open={opneOnboard}
        onClose={setOpenOnboard(false)}
        aria-labelledby="onboard-modal-title"
        aria-describedby="onboard-modal-description"
    >
        <Box sx={{ ...modalStyle, width: 400 }}>
            <h2 id="onboard-modal-title">Text in a modal</h2>
            <p id="onboard-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <Button variant="outlined" size="small" onClick={onboard} >
                Confirm
            </Button>
        </Box>
    </Modal>
  )
}

export default Modal