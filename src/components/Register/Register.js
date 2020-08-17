import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { register } from "../../actions/AuthActions";

function Register(props) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      errors: state.error.msg.errors,
    };
  });

  useEffect(() => {
    if (state.errors && state.errors) {
      setErrors(state.errors);
    }
  }, [state.errors]);

  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ ...formData }));
  };

  if (state && state.isAuthenticated) {
    props.history.push("/");
  }

  return (
    <div>
      <div>
        <div className='container-fluid'>
          <div className='row no-gutter'>
            <div className='d-none d-md-flex col-md-4 col-lg-6 bg-image'></div>
            <div className='col-md-8 col-lg-6'>
              <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-9 col-lg-8 mx-auto'>
                      {errors &&
                        errors.length > 0 &&
                        errors.map((error, index) => (
                          <div className='alert alert-danger' key={index}>
                            {error.msg}
                          </div>
                        ))}

                      <h3 className='login-heading mb-4'>Create account </h3>
                      <form method='POST' onSubmit={onSubmit}>
                        <div className='form-label-group'>
                          <input
                            type='email'
                            id='inputEmail'
                            className='form-control'
                            placeholder='Email address'
                            onChange={(e) => onChange(e.target.value, "email")}
                            autoFocus
                          />
                          <label htmlFor='inputEmail'>Email address</label>
                        </div>

                        <div className='form-label-group'>
                          <input
                            type='password'
                            id='inputPassword'
                            className='form-control'
                            placeholder='Password'
                            onChange={(e) =>
                              onChange(e.target.value, "password")
                            }
                          />
                          <label htmlFor='inputPassword'>Password</label>
                        </div>

                        <div className='custom-control custom-checkbox mb-3'>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customCheck1'
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='customCheck1'
                          >
                            Remember password
                          </label>
                        </div>
                        <button
                          className='btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2'
                          type='submit'
                        >
                          Sign Up
                        </button>
                        <div className='text-center'>
                          <a className='small' href='#'>
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
