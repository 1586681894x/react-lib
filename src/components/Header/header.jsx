import React from 'react';
import {
    Button, Paper, Container, AppBar, Slide,
    InputBase,
    Tabs, Tab,
    useScrollTrigger
} from "@material-ui/core";
//
import Logo from './logo'
import SearchButton from '../Menu/search_button'
import SearchButton1 from '../Menu/search_button1'
import ChainButton from '../Menu/chain_button'

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 80,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        position: trigger ? 'fixed' : 'relative',
    });
}

class Index extends React.PureComponent {

    render(){
        let st = this.state;
        return (
            <div className="app-header">
                <ElevationScroll>
                    <AppBar color="inherit" >
                        <Container className="fl-r">
                            <div className="fl-one">
                                <Logo />
                            </div>
                            <div className="searchbtn fl-box">
                                <SearchButton />
                            </div>
                            <div className="searchbtn1 fl-box fl-middle">
                                <SearchButton1 />
                            </div>
                        </Container>
                    </AppBar>
                </ElevationScroll>
                <div className="container">
                    <Paper square className="app-menu fl-r fl-middle">
                        <ChainButton className="fl-one" />
                        <Tabs
                            value={0}
                            className="fl-box"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="disabled tabs example"
                        >
                            <Tab label="Active" />
                            <Tab label="Disabled" />
                            <Tab label="Active" />
                        </Tabs>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Index;


