import React from 'react'
import {Container} from "react-bootstrap";
import '../../app.css';
import NavBar from "../../components/NavBar/NavBar"
import AdminButtonsSet from "../../components/AdminPanel/AdminButtonsSet"
import { RootState } from "../../store";
import { connect } from "react-redux";

const AdminPanel = (props: any) => {
    console.log(props.token)
    return (
        <>
        <NavBar isSiteAdmin={true} userUsername={props.username} userToken={props.token}></NavBar>
        <Container className={"d-flex justify-content-center align-items-center m-auto h-75"}>
            <AdminButtonsSet newToken={props.token}></AdminButtonsSet>
        </Container>
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        isLogged: state.system.isLoggedIn,
        token: state.system.token,
        username: state.system.username,
        date: state.system.date
    }
}

export default connect(mapStateToProps)(AdminPanel);
