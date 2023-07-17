import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, handleClose, handleDelete, handleComplete, option }) {

    //const [open, setOpen] = React.useState(false);



    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {option === 'supprimer' && 'Voulez-vous vraiment supprimez cette tache?'}
                        {option === 'terminer' && 'Voulez-vous marquer cette tache terminee?'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {option === 'supprimer' && <Button onClick={handleClose}>Non je la garde</Button>}
                    {option === 'supprimer' && <Button onClick={handleDelete} autoFocus>
                        Oui supprimer
                    </Button>}
                    {option === 'terminer' && <Button onClick={handleClose}>Non pas encore</Button>}
                    {option === 'terminer' && <Button onClick={() => { handleComplete(); handleClose() }} autoFocus>
                        Oui terminer cette tache
                    </Button>}
                    {option === 'modifier' && <Button onClick={handleClose}>Non</Button>}
                    {option === 'modifier' && <Button onClick={handleDelete} autoFocus>
                        Oui modifier
                    </Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}