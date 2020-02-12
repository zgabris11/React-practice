import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBInput, MDBBtn} from 'mdbreact';


class PhoneEmail extends Component {
    render(){
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBInput type="text" className="home-form" label="Name"/>
                        <MDBInput type="text" className="home-form" label="Name"/>
                        <a type="button" href="/">Finish</a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}
export default PhoneEmail;