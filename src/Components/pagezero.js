import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBInput, MDBBtn} from 'mdbreact';
import './style.css';

class Home extends Component {
    render(){

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <ul className="home-list">
                            <li><MDBCardImage className="home-img" src="http://placekitten.com/300/300"/></li>
                            <li className="button-li"><a className="next-button" color="primary" href="/NameAddress">Edit</a></li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default Home;