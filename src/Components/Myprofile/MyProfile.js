import React from 'react'
import { Container, Tabs, Tab} from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import './MyProfile.css'
const MyProfile = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
        <Container className='myprofile'>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 shadow">
        <Tab eventKey="" title="Admin assigned information" >
                <Container>

                </Container>
            </Tab>
            <Tab eventKey="Personal Information" title="Personal Information" >
                <Container>
                <h1>Personal Information</h1>
                </Container>
            </Tab>
            <Tab eventKey="Work Information" title="Work Information" >
                <Container>
                    <h1>Work Information</h1>
                </Container>
            </Tab>
            <Tab eventKey="Bank details" title="Bank details" >
                <Container>
                    <h1>Bank details</h1>
                </Container>
            </Tab>
            </Tabs>
        </Container>
    </div>
  )
}

export default MyProfile