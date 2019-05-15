import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    
    renderError( { error, touched }) {
        if (touched && error) {
            // Semantic UI hides error messages by default
            return(
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            );
        }
    }

    renderInput = ( {input, label, meta }) => {
        // ``this`` is unknown since this function is called from ``Field``
        // We have to change renderInput into an arrow function
        
        const className = `field ${ meta.error && meta.touched ? 'error' : ''}`
        
        return (
            < div className={ className }>
                <label>{ label }</label>
                <input { ...input } autoComplete="off" />
                { this.renderError(meta) }
            </div>
        );
    }

    // Redux Form takes care of:
    // - Preventing the default submit
    // - Passing values to the function, instead of an event.
    //   Warning: If they are not filled they are not passed (undefined)
    //            To avoid problems, use ``validate(formValues)``
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        // Field.name is the name of the prop that the field will handle
        // Additional props that the Field component does not know about
        // will be passed to the function as props (e.j. ``label``).
        // It will also handle automatically ``initialValues`` of the
        // Fields.
        return (
            <form 
                onSubmit={ this.props.handleSubmit(this.onSubmit) }
                className="ui form error"
            >
                <Field
                    name="title"
                    component={ this.renderInput }
                    label="Enter title"
                />
                <Field
                    name="description"
                    component={ this.renderInput }
                    label="Enter description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// Called everytime the user submits the form
const validate = (formValues) => {
    const errors = {}
    // Name of the fields should match name of the errors.<prop>
    if(!formValues.title) {
        errors.title = "You must enter a title"
    }
    if(!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors
};

export default reduxForm({
    form: 'streamForm', // Name of the form. Generally it is its purpose
    validate // Could be condensed and put only "validate"
})(StreamForm);
