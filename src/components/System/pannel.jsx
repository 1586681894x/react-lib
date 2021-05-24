import { React } from "@/core";

export default function (props) {
    return (
        <React.Fragment>
            <div className="c-title">
                <div className="main black">{props.title}</div>
                <div className="sub blue">{props.sub}</div>
            </div>
            {props.children}
            <br/>
        </React.Fragment>
    )
}
