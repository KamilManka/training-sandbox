import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'

export const ConfirmationDialog = () => {
  return (
    <Dialog
    sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
    maxWidth="xs"
    TransitionProps={{ onEntering: handleEntering }}
    open={open}
    {...other}
  >
    <DialogTitle>Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        {dialogContent}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
