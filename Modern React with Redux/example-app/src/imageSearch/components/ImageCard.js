import React from 'react';

class ImageCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    // Trying to access the img height in ``componentDidMount`` would be
    // too soon, since it has to be fetched from a URL. Therefore, we need
    // and event handler (JS/HTML level, not React based).
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        // As of ES2015 if key and vlaue are the same only one has to be specified
        // Therefore { spans: spans} is equal to { spans }
        this.setState({ spans });
    }

    render() {

        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;