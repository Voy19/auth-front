import React, {Component} from 'react';
import styled from 'styled-components'

const StyledForm = styled.div`
    padding: 25px;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 2.5px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.8);
    outline: none;
    color: white;
         &::placeholder{
             color: rgba(255, 255, 255, 0.6); 
         }
`;
const FormTitle = styled.h3`
    font-weight: lighter;
    font-size: 1.6rem;
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
            name:'',
            surname:'',
            email:'',
            password: '',
            repeatPassword:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            login: this.state.login,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            repeatPassword: this.state.repeatPassword
        };
        fetch(`http://localhost:1337/registration`, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(post)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                                     onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <StyledInput placeholder="First Name"
                                     type="text"
                                     name="name"
                                     value={this.state.name}
                                     onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <StyledInput placeholder="Last Name"
                                     type="text"
                                     name="surname"
                                     value={this.state.surname}
                                     onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <StyledInput placeholder="Email Address"
                                     type="email"
                                     name="email"
                                     value={this.state.email}
                                     onChange={this.onChange}/>
                    </div>
                    <br/>

                    <div>
                        <StyledInput placeholder="Password"
                                     type="password"
                                     name="password"
                                     value={this.state.password}
                                     onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <StyledInput placeholder="Repeat Password"
                                     type="password"
                                     name="repeatPassword"
                                     value={this.state.repeatPassword}
                                     onChange={this.onChange}/>
                    </div>
                    <br/>
                    <SubmitButton type="submit">Sing Up</SubmitButton>
                </form>
            </StyledForm>
        );
    }
}

export default LoginForm;