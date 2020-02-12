import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBInput, MDBBtn} from 'mdbreact';

class Home extends Component {
    render(){

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBCardImage src="http://placekitten.com/200/300"/>
                        <a color="primary" href="/NameAddress">Edit</a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default Home;