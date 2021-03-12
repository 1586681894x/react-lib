import {
    React,_,
    Stepper ,Step ,StepLabel
} from "@/core";
import { withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

class Index extends React.PureComponent {

    UNSAFE_componentWillMount(){
        this.$data = _.extend({
            steps: getSteps(),
            onClick: ()=>{},
            clz: this.props.onClick ? 'abled' : ''
        },this.props)
    }

    render(){
        const Line = getConnector();
        const { steps, clz, onClick } = this.$data;

        return (
            <Stepper className={`line_show ${clz}`} alternativeLabel activeStep={100} connector={<Line />}>
                {steps.map((v,idx) => (
                    <Step key={idx} onClick={()=>{onClick(v)}}>
                        <StepLabel icon={<StepIcon {...v}/>}>{v.text}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        )
    }
}

export default Index;

// demo
function getSteps() {
    return [
        {name:'注册',text:'免费注册'},
        {name:'注册',text:'免费注册'},
        {name:'注册',text:'免费注册'}
    ]
}
// icon
function StepIcon(props) {
    return <div className="icon fl-center"><span>{props.name}</span></div>
}
// connector
const getConnector = ()=>{
    return withStyles({
        alternativeLabel: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
        },
        line: {
            borderColor: '#eaeaf0',
            borderTopWidth: 4,
            borderRadius: 1,
            margin:'12px'
        },
    })(StepConnector)
}
