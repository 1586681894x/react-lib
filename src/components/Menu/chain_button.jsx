import {
    React,
    Button,
    List,
    ListItem,
    //ListItemIcon,
    ListItemSecondaryAction,
    ListItemText
} from "@/core";
import { withStyles } from '@material-ui/core/styles';
// style
const style = (theme) => ({
    box:{
        width: '280px',
        marginRight: '1rem',
        position:'relative'
    },
    button:{
        width: '100%',
        height: '48px',
        borderRadius: '0 !important'
    },
    dialog:{
        width: '100%',
        backgroundColor: 'rgb(0 0 0 / 30%)',
        color: '#fff',
        position:'absolute',
        left: 0,
        top: '48px',
        zIndex:1000
    },
    icon:{
        marginRight:'1rem',
        fontSize:'1rem',
        transform: 'translateY(-1px)',
    }
});

@withStyles(style)
class Index extends React.PureComponent {

    state = {
        open:true
    }

    toggleOpen = ()=>{
        this.setState({open:!this.state.open})
    }

    renderItem(){
        const { classes } = this.props;
        return [1,2,3].map((idx)=>{
            return (
                <ListItem button key={idx}>
                    <i className={`iconfont iconjiesuanguanli ${classes.icon}`} />
                    <ListItemText primary={<span style={{color:'#fff'}}>Inbox</span>} />
                    <ListItemSecondaryAction><i className='iconfont iconyoujiantou-xianxing' /></ListItemSecondaryAction>
                </ListItem>
            )
        })
    }

    render(){
        const { classes } = this.props;
        const st = this.state;
        return (
            <div className={classes.box} >
                <Button
                    onClick={this.toggleOpen}
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<i className="iconfont iconjiesuanguanli" />}>供应链服务</Button>
                <div className={classes.dialog} style={{display:st.open||'none'}}>
                    <List component="nav">{this.renderItem()}</List>
                </div>
            </div>
        )
    }
}

export default Index;
