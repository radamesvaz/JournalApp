import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>

            <form>

                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="confirm password"
                    name="confirm"
                    className="auth__input"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
            </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already Registered?
            </Link>

            </form>
        </>
    )
}
