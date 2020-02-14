import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBInput, MDBBtn} from 'mdbreact';


class PhoneEmail extends Component {
    render(){
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <ul className="sub-list">
                            <li><input type="text" className="home-form" placeholder="Phone Number"/></li>
                            <li><input type="text" className="home-form" placeholder="Email"/></li>
                            <li className="button-li"><a type="button" className="next-button" href="/">Finish</a></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}
export default PhoneEmail;