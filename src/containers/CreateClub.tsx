import React from 'react'
import ClubForm from '../components/ClubForm/ClubForm';
import NavBar from "../components/NavBar/NavBar"

const CreateClub = () => {

    return (
        <>
        <NavBar isSiteAdmin={false}></NavBar>
        <ClubForm title={"Submit for review"}>

        </ClubForm>
        </>
    )
};

export default CreateClub;
