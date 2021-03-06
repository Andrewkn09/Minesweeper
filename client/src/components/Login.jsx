import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='sub-container'>
        <div className='login'>
          <div className='form'>
            <form className='login-form'>
              <fieldset>
                <legend>Log in</legend>
                <label>Username:</label>
                <br />
                <input type='text' />
                <br />
                <label>Password:</label>
                <br />
                <input type='password' />
                <br />
                <button className='login-submit' type='submit'>
                  Log in
                </button>
                <br />
                <div className='separator'>OR</div>
                <div className='google'>
                  <a href='/google/login'>Log in with Google</a>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
