import React from 'react'
import Button from "react-bootstrap/Button";
import Label from "../components/Form/Label";
import {emailLabel, FormInfo, passConfirmLabel, passLabel, userLabel} from "../types/FormInfo";
import {useHistory} from 'react-router-dom'
import '../app.css';
import {Formik} from "formik";
import {loginSchema} from "../components/Form/Schemas";
import FormContainer from "../components/Form/FormContainer";
import {Form} from "react-bootstrap";
import FormButton from "../components/Form/FormButton";


const Login = () => {
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

    return (
        <div>
            <Button variant="outline-light" className="m-2 text-uppercase" onClick={() => changeRoute('/')}>Back to
                Home
            </Button>
            <Formik
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    console.log(values)
                }}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={state}>
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => {
                    const labels = [userLabel, passLabel];
                    const formLabels = labels.map((label: FormInfo, index: number) => {
                        return (<Label key={index} errors={errors} handleChange={handleChange} name={label.name}
                                       values={values} placeholder={label.placeholder} type={label.type}/>)
                    });
                    return (
                        <FormContainer title={"Login"}>
                            <Form noValidate onSubmit={handleSubmit}>
                                {formLabels}
                                <FormButton name={"Login"}/>
                            </Form>
                        </FormContainer>
                    );
                }}
            </Formik>
        </div>
    )
};

export default Login
