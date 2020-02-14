import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBInput, MDBBtn} from 'mdbreact';
import './style.css';


class NameAddress extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <ul className="sub-list">
                            <li><input type="text" className="home-form" placeholder="Name"/></li>
                            <li><input type="text" className="home-form" placeholder="Address"/></li>
                            <li className="button-li"><a type="button" className="next-button" href="/PhoneEmail">Next Page</a></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default NameAddress;
