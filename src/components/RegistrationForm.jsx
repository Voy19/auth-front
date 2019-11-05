import React, {Component} from 'react';
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const loginRegex = RegExp(/^([a-zA-z])(?!\S*?[\(\)\{\}\/\\\[\],. а-яА-Я]).{5,}$/);
const nameRegex = RegExp(/^[a-zA-Z0-9]{5,}$/);
const emailRegex = RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/);
const passwordRegex = RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?!\S*?[!@#$^&%*()+=\-\[\]\/\{\}|\:\<\>?,. а-яА-Я]).{6,})\S$/);


const formValid = ({validationErrors, ...rest}) => {
    let valid = true;

    Object.values(validationErrors).forEach(val => {
        if (val) valid = false;
    });

    // Object.values(rest).forEach(val => {
    //     val === '' && (valid = false);
    // });
    //console.log(valid);

    return valid;
};

const StyledForm = styled.div`

    padding: 25px;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 2.5px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
         &::placeholder{
             color: rgba(255, 255, 255, 0.6); 
         }
    border-bottom:
    ${props => props.error
        ?`2px solid red;`
        :`2px solid rgba(255, 255, 255, 0.8);`
    }
`;
const FormTitle = styled.h3`
    font-weight: lighter;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.85); 
`;
const StyledText = styled.p`
    font-weight: lighter;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85); 
`;
const SubmitButton = styled.button`
    width: 100%;
    height: 34px;
    border: none;
    outline: none;
    cursor:pointer;
    border-radius: 4px;
    font-weight: lighter;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.95);
        &:hover{
            background: rgba(255, 255, 255, 0.90);
        }
        &:active{
            background: rgba(255, 255, 255, 0.80);
        }
`;


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            name: '',
            surname: '',
            email: '',
            password: '',
            repeatPassword: '',
            validationErrors: {
                login: false,
                name: false,
                surname: false,
                email: false,
                password: false,
                repeatPassword: false,
            }
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate = () => {
        const validationErrors = {...this.state.validationErrors};
        const state = {...this.state};

        for (let key in state) {
            switch (key) {
                case("login"):
                    validationErrors.login = !loginRegex.test(state[key]);
                    break;
                case("name"):
                    validationErrors.name = !nameRegex.test(state[key]);
                    break;
                case("surname"):
                    validationErrors.surname = !nameRegex.test(state[key]);
                    break;
                case("email"):
                    validationErrors.email = !emailRegex.test(state[key]);
                    break;
                case("password"):
                    //validationErrors.password = !(passwordRegex.test(value) && value === repeatPassword);
                    validationErrors.password = !passwordRegex.test(state[key]);
                    break;
                case("repeatPassword"):
                    validationErrors.repeatPassword = state.password !== state.repeatPassword;
                    break;
                default:
                    break;
            }
        }
        this.setState({validationErrors});
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };


    onSubmit(e) {
        e.preventDefault();
        this.validate();
        if (formValid(this.state)) {
            console.log("PRAILNA")
            // const post = {
            //     login: this.state.login,
            //     name: this.state.name,
            //     surname: this.state.surname,
            //     email: this.state.email,
            //     password: this.state.password,
            //     repeatPassword: this.state.repeatPassword
            // };
            // fetch(`http://localhost:1337/registration`, {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     body: JSON.stringify(post)
            // })
            //     .then(res => console.log(res))
            //     .catch(err => console.log(err))
        } else {
            console.log("NEPRAILNA")
        }


    }

    render() {
        return (
                <StyledForm>
                    <FormTitle>Sign Up</FormTitle>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <StyledInput placeholder="Login"
                                         type="text"
                                         name="login"
                                         value={this.state.login}
                                         onChange={this.handleChange}
                                         error={this.state.validationErrors.login ? 1 : 0}/>

                        </div>
                        <br/>
                        <div>
                            <StyledInput placeholder="First Name"
                                         type="text"
                                         name="name"
                                         value={this.state.name}
                                         onChange={this.handleChange}
                                         error={this.state.validationErrors.name ? 1 : 0}/>
                        </div>
                        <br/>
                        <div>
                            <StyledInput placeholder="Last Name"
                                         type="text"
                                         name="surname"
                                         value={this.state.surname}
                                         onChange={this.handleChange}
                                         error={this.state.validationErrors.surname ? 1 : 0}/>
                        </div>
                        <br/>
                        <div>
                            <StyledInput placeholder="Email Address"
                                         type="email"
                                         name="email"
                                         value={this.state.email}
                                         onChange={this.handleChange}
                                         error={this.state.validationErrors.email ? 1 : 0}/>
                        </div>
                        <br/>

                        <div>
                            <StyledInput placeholder="Password"
                                         type="password"
                                         name="password"
                                         value={this.state.password}
                                         onChange={this.handleChange}
                                         error={this.state.validationErrors.password ? 1 : 0}/>
                        </div>
                        <br/>
                        <div>
                            <StyledInput placeholder="Repeat Password"
                                         type="password"
                                         name="repeatPassword"
                                         value={this.state.repeatPassword}
                                         onChange={this.handleChange}
                                         error={this.state.validationErrors.repeatPassword ? 1 : 0}/>
                        </div>
                        <br/>
                        <SubmitButton type="submit">Sing Up</SubmitButton>
                        <br/>
                        <br/>
                        <StyledText>Already have an account? <Link to={"/login"}>Sign In</Link></StyledText>
                    </form>
                </StyledForm>
        );
    }
}

export default LoginForm;