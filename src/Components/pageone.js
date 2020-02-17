import React from 'react';
import { Form, Control } from 'react-redux-form';

class NameAddress extends React.Component{
    handleSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
                <label>Name</label>
                <Control.text model="user.name"/>
                <label>Address</label>
                <Control.text model="user.address"/>
                <a type="button" className="next-button" href="//PhoneEmail">Next Page</a>
            </Form>
        )
    }
}
export default NameAddress;

// class NameAddress extends Component {
//
//
//     render() {
//         return (
//             <MDBContainer>
//                 <MDBRow>
//                     <MDBCol>
//                         <ul className="sub-list">
//                             <li><input type="text" className="home-form" placeholder="Name" /></li>
//                             <li><input type="text" className="home-form" placeholder="Address"/></li>
//                             <li className="button-li"><a type="button" className="next-button" href="/PhoneEmail" onClick={() => this.submit()}>Next Page</a></li>
//                         </ul>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         )
//     }
// }
// export default NameAddress;
