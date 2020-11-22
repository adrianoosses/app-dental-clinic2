import axios from 'axios'
import React from 'react';
import '../getappointments/getappointments.css'

export default class GetAppointments extends React.Component{
    constructor(props){
        super();
        this.state = {
            arrayAppos: []
        };
    }
    componentDidMount() {
        const emailUsr = localStorage.getItem('email');
        const token = localStorage.getItem('tokenUsr');
        const url = 'https://app-dental-clinic.herokuapp.com/appointment/getMy';
        axios.get(url, { params: { email: emailUsr },
                         headers: {authorization: token} }
                         )
            .then(appo => {
                this.setState( {
                    arrayAppos: appo.data
                } );
            } );
    }
    render(){
        return(
            <section className="contentStyle">
                <h1>Appointments</h1>
                <table className="tableAppointments">
                    <tr>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Hour</th>
                    </tr>
                    
                { this.state.arrayAppos.map((appo, index) => {
                    return (
                        <tr>     
                            <td>{appo.useremail}</td>
                            <td>{appo.docemail}</td>
                            <td>{appo.service}</td>
                            <td>{appo.status}</td>
                            <td>{appo.hour}</td> 
                        </tr>
                    );
                })
                } 
                </table>
            </section>
        )
    }
    
}
