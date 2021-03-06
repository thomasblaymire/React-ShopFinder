import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLocation} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event) {
        this.setState({ term: event.target.value })

    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchLocation(this.state.term);
        this.setState({term: ''})
    }


    render() {
        return (
            <div>

            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search for a parcelshop"
                    className="form-control"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchLocation}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
