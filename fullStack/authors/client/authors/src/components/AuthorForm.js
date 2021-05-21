import React from 'react'
import { navigate } from '@reach/router';

const AuthorForm = props => {
    const { submitHandler, author, changeHandler, action, DeleteButton, errors } = props;


    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="form-group row">
                { 
                    errors.name ?
                    <span className="col-sm-8 text-danger offset-sm-4">{errors.name}</span>
                    :
                    ''
                }
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" className="col-sm-8" onChange={changeHandler} />
                {/* value={author.name} */}
            </div>
            <div className="form-group row flex-right">
                {
                    DeleteButton ?
                    DeleteButton
                    : 
                    ''
                }
                <input type="button" className="col-sm-2" value="Cancel" onClick={ () => navigate('/') } />
                <input type="submit" className="col-sm-2" value={action} onClick={ () => navigate('/') }/>
            </div>
            </form>
        </div>
    )
}

export default AuthorForm
