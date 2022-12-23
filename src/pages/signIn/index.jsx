import React from 'react'

const SignIn = () => {
    return (
        <div class="input-group mb-3" >
            <span class="input-group-text" id="inputGroup-sizing-default">Login</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
    )
}
export default SignIn