import React from 'react'

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    llevameALogin(){
        this.props.history.push("/login");
    }
    render() {
        return (
            <div className="contentStyle">
                <h2>Patient site</h2>
                From this site, you can access to all your pending appointments. 

                <h2>Admin site</h2>
                Management the clients appointents.

            </div>
        )
    }
}
export default Home;