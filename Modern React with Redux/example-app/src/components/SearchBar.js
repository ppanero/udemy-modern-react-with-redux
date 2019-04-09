import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // Alternate definition
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // Arrow function for automatic binding
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form 
                    className="ui form"
                    onSubmit={ this.onFormSubmit }
                    // onSubmit={ (event) => this.onFormSubmit(event) } // Alternative definition
                >
                    <div className="field">
                        <label> Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            // onChange={ this.onInputChange } // Alternate definition
                            onChange={
                                (event) => this.setState({term: event.target.value})
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;