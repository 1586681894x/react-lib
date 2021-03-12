import { React } from "@/core";
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
    paper:{

    }
});

class Index extends React.PureComponent {

    render(){
        return (
            <div className="App">
                <h2>APP:</h2>
                <br/>
                {this.props.children}
            </div>
        )
    }
}

export default Index;
