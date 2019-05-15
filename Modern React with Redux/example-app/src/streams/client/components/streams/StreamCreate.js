import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    
    // Redux Form takes care of:
    // - Preventing the default submit
    // - Passing values to the function, instead of an event.
    //   Warning: If they are not filled they are not passed (undefined)
    //            To avoid problems, use ``validate(formValues)``
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={ this.onSubmit } />
            </div>
        );
    }
}

export default connect(
    null,
    { createStream }
)(StreamCreate);