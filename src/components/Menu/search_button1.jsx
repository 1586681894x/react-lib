import {
    React,
    Paper,
    Popover,
    InputBase,
    Button,
    List,ListItem,ListItemText
} from "@/core";

const categoryArr = ['Market','Prodcut'];

class Index extends React.PureComponent {
    state = {
        category:0,
        open:false,
        anchorEl:null
    }

    setCategory(val){
        return ()=>{
            this.setState({category:val,open:false})
        }
    }

    setOpen(val){
        return (e)=>{
            this.setState({open:val,anchorEl: val ? e.target.closest('button') : null})
        }
    }

    render(){
        const st = this.state;
        return (
            <React.Fragment>
                <Paper variant="outlined" square className="search-box" >
                    <Button
                        onClick={this.setOpen(true)}
                        className="category"
                        variant="contained"
                        endIcon={<i className="iconfont iconxiajiantou" style={{fontSize:'.8rem'}}/>}>{categoryArr[st.category]}</Button>
                    <InputBase
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Button className="search" color="secondary" variant="contained">搜索</Button>
                </Paper>

                <Popover
                    id="mouse-over-popover"
                    open={st.open}
                    anchorEl={st.anchorEl}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                    transformOrigin={{vertical: 'top', horizontal: 'left'}}
                    onClose={this.setOpen(false)}
                >
                    <List component="nav" style={{width:'122px'}}>
                        <ListItem button onClick={this.setCategory(0)}>
                            <ListItemText primary={categoryArr[0]} />
                        </ListItem>
                        <ListItem button onClick={this.setCategory(1)}>
                            <ListItemText primary={categoryArr[1]} />
                        </ListItem>
                    </List>
                </Popover>
            </React.Fragment>
        )
    }
}

export default Index;
