import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

return class DialogBox extends React.Component{
    onClose = ()=>{
        this.setState({open:false})
    }
    onOpen = (opt)=>{// {}
        opt.open = true;
        this.setState(opt);
    }

    constructor(props){
        super(props);
        this.state = {
            open:false,
            title:'提示',
        }
    }

    render(){
        let st = this.state;
        return (
            <Dialog onClose={this.onClose} aria-labelledby="simple-dialog-title" open={st.open}>
                <DialogTitle>{st.title}</DialogTitle>
                <DialogContent ></DialogContent>
                <DialogActions>
                    <Button color="primary" >Cancel</Button>
                    <Button color="primary" >Ok</Button>
                </DialogActions>
            </Dialog>
        )
    }
}
