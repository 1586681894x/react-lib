import {
    React,
    CMTop,
    CMHeader,
    Paper
} from '@/core';

let { _ } = window;

class Index extends React.PureComponent {

  render(){
    //let { classes } = this.props;
    return (
        <React.Fragment>
            <CMTop />
            <CMHeader />

            <div className="pannel_box container">
                <div className="fl-r">
                    <div className="title fl-box">1优质采购商</div>
                    <div className="more fl-one">更多</div>
                </div>
                <Paper>
                    1
                </Paper>
            </div>
            <div ref="an1" className="pannel_box container">
                <div className="fl-r">
                    <div className="title fl-box">优质采购商</div>
                    <div className="more fl-one">更多</div>
                </div>
                <Paper>
                    1
                </Paper>
            </div>
            <div ref="an2"  className="pannel_box container">
                <div className="fl-r">
                    <div className="title fl-box">优质采购商</div>
                    <div className="more fl-one">更多</div>
                </div>
                <Paper>
                    1
                </Paper>
            </div>
            <div ref="an3"  className="pannel_box container">
                <div className="fl-r">
                    <div className="title fl-box">优质采购商</div>
                    <div className="more fl-one">更多</div>
                </div>
                <Paper>
                    1
                </Paper>
            </div>

            <br/>
            <br/>
            <br/>
        </React.Fragment>
    )
  }
}

export default Index;

