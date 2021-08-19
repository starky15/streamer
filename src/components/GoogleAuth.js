import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn: null}
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn : this.auth.isSignedIn.get()})
            });
        });
    };

    signOut(){
        window.gapi.auth2.getAuthInstance().signOut()
    }

    signIn(){
        window.gapi.auth2.getAuthInstance().signIn()
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null){
            return null
        }
        else if (this.state.isSignedIn){
            return (<div>
                <button className="ui google red button" onClick={this.signOut}>
                <i className="google icon"></i> Sign Out
                </button>
                </div>);
        }
        else{
            return (<div>
                <button className="ui google green button" onClick={this.signIn}>
                <i className="google icon"></i> Sign In
                </button>
                </div>);
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    };

};

export default GoogleAuth;