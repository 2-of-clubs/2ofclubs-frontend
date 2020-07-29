import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import ClubsOverview from "../../components/ClubsOverviewTable/ClubsOverview";
import {useHistory} from 'react-router-dom'
import NavBar from "../../components/NavBar/NavBar"
import { connect } from 'react-redux';
import { RootState } from '../../store';

const ManageClubs = (props: any) => {
    const history = useHistory();
    const changeRoute = (path: string) => {
        history.replace({pathname: path})
    };

    const [state, setState] = React.useState({
        username: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        const id = event.target.id
        setState({
            ...state,
            [id]: value
        })
    }

    console.log("manageclubs token:" + props.token);

    return (
        <>
        <NavBar isSiteAdmin={false}></NavBar>
        <Container className={"d-flex justify-content-center align-items-center mt-5"}>
            <ClubsOverview title={"Your Clubs"} view={true} token={props.token}></ClubsOverview>
        </Container>
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    const token = state.system.token;
    return {
        isLogged: state.system.isLoggedIn,
        token: state.system.token
    }
}

export default connect(mapStateToProps)(ManageClubs);
