import React, {Component} from 'react';

class HistorySample extends Component {
    //go back
    handleGoBack = () => {
        this.props.history.goBack();
    };

    //home
    handleGoHome = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        //whenever change in page, ask if you want to be out
        this.unblock = this.props.history.block('wnana leave?');
    }

    componentWillUnmount(){
        //stops questions when being unmounted
        if (this.unblock){
            this.unblock();
        }
    }

    render(){
        return(
            <div>
                <button onClick = {this.handleGoBack}>back</button>
                <button onClick = {this.handleGoHome}>Home</button>
            </div>
        )
    }
}

export default HistorySample;