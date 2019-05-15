import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    onChangeInput = (event) => {
        this.setState({ term: event.target.value})
    };

    onFormSumbit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={ this.onFormSumbit }>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={ this.state.term } 
                            onChange={ this.onChangeInput }
                        />
                    </div>
                </form>
            </div>
        )
    };
}

export default SearchBar;