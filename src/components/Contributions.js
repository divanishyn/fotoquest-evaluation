import React from 'react';
import Contribution from './Contribution';

class Contributions extends React.Component {
    render() {
        return (
            <div>
                <h1>Contributions</h1>
                {this.props.data.map((record) => (
                    <Contribution key={record.id} data={record} />
                ) )}
            </div>
        )
    }
}

export default Contributions;