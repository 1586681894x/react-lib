import { React } from "@/core";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    }
];

class Index extends React.PureComponent {

    state = {
        activeStep:0
    }

    changeImg = (idx)=>{
        this.setState({activeStep:idx})
    }

    renderStep(){
        let arr =[], index = this.state.activeStep;
        return (
            <ul className="step">
                {
                    tutorialSteps.map((step, idx)=>{
                        return <li key={idx} className={`${index === idx?'active':''}`} onClick={()=>{this.changeImg(idx)}} >{idx+1}</li>
                    })
                }
            </ul>
        )
    }

    render(){
        const st = this.state;
        return (
            <div className="carsousel">
                <AutoPlaySwipeableViews
                    index={st.activeStep}
                    interval={10000}
                    onChangeIndex={this.changeImg}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(st.activeStep - index) <= 2 ? (
                                <img className="item" src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                {this.renderStep()}
            </div>
        )
    }
}

export default Index;
