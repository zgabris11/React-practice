import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBInput, MDBBtn} from 'mdbreact';


class NameAddress extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBInput type="text" className="home-form" placeholder="Name"/>
                        <MDBInput type="text" className="home-form" placeholder="Address"/>
                        <a type="button" href="/PhoneEmail">Next Page</a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default NameAddress;
