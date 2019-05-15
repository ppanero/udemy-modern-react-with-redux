import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div key={ song.title } className="item">
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => this.props.selectSong(song) }
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{ song.title } </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">{ this.renderList() }</div>
        );
    }
}

const mapStateToProps = (state) => {
    // The keys returned by this function will be seen
    // as ``props`` in the above object.
    return { songs: state.songs };
};

export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList);