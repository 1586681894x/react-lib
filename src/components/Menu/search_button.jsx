import {
    React,
    Paper,
    InputBase,
    Button
} from "@/core";

class Index extends React.PureComponent {
    state = {
        category:0
    }

    setCategory(val){
        return ()=>{
            this.setState({category:val})
        }
    }

    render(){
        const st = this.state;
        return (
            <React.Fragment>
                <div className={`search-category ${st.category===0 || 'active'}`} >
                    <Button className="btn0" onClick={this.setCategory(0)}>Market</Button>
                    <Button className="btn1" onClick={this.setCategory(1)}>Product</Button>
                    <i className="iconfont iconshangjiantou"/>
                </div>
                <Paper variant="outlined" square className="search-box" >
                    <InputBase
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Button className="search" color="secondary" variant="contained">搜索</Button>
                </Paper>
            </React.Fragment>
        )
    }
}

export default Index;
