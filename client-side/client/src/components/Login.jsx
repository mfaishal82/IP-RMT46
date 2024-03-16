import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import FacebookLogin from "./FacebookLogin"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    let errorMessage

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://project.mf-cyberse.online/auth/login', {
                email, password
            })

            localStorage.setItem('access_token', response.data.access_token)
            console.log(response.data)

            navigate('/contents')
        } catch (error) {
            // console.log(error)
            errorMessage = error.response.data.message
            console.log(errorMessage)
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center" style={{ margin: '10%' }}>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="your@mail.com"
                            name="email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                                // console.log(email)
                            }}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="yourpassword123"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                // console.log(password)
                            }}
                        />
                    </div>
                    <div className="d-flex justify-content-center" style={{ padding: '2%' }}>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Log in
                            </button>
                        </div> <br />
                        <div>
                            <Link to='/pub'><button className="btn btn-outline-danger">
                                Cancel
                            </button></Link>
                        </div>
                    </div>
                    Don't have an account? <Link to='/register'>Register First!</Link>
                    <hr />
                    <div className="container" style={{textAlign: 'center'}}>
                        or
                        <FacebookLogin />
                    </div>
                </form>
            </div>

        </>
    )
}