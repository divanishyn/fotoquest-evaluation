import React from 'react';

class Contribution extends React.Component {
    render() {
        const {id, photos} = this.props.data;
        console.log(this.props.data);
        return (
            <div>
                <h2>Contribution {id}</h2>
                {photos.map((photo) => (
                    <img width='150' src={photo.url} />
                ) )}
            </div>
        )
    }
}

export default Contribution;