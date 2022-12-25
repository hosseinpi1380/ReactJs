import React from 'react'
import {Button,Modal} from 'react-bootstrap'

export default class ModalComponent extends React.Component {
    state={
        showModal:true
    }
    render(){
        return (
                <div
                  >
                    <Modal centered show={this.state.showModal} onHide={()=>this.setState({
                        showModal:false
                    })}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
    
                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>
    
                        <Modal.Footer style={{justifyContent:"flex-start"}}>
                            <Button variant="secondary" onClick={()=>this.setState({
                                showModal:false
                            })}>Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                    <Button onClick={()=>this.setState({showModal:true})}>Remove file</Button>
                </div>
        )
    }
}
