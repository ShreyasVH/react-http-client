import { get, post, put, del } from '../utils/api';
import { Component } from 'react';

export default class Springboot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            get: '',
            post: '',
            put: '',
            delete: '',
            loaded: false
        };

        this.getUrl = 'http://localhost:9013/api?input=abc';
        this.postUrl = 'http://localhost:9013/api';
        this.putUrl = 'http://localhost:9013/api';
        this.deleteUrl = 'http://localhost:9013/api';
        this.payload = {
            a: 'A',
            b: 'B'
        };
    }

    async componentDidMount() {
        const getResponse = await get(this.getUrl);

        const postResponse = await post(this.postUrl, this.payload);

        const putResponse = await put(this.putUrl, this.payload);

        const deleteResponse = await del(this.deleteUrl);

        this.setState({
            get: getResponse.data,
            post: postResponse.data,
            put: putResponse.data,
            delete: deleteResponse.data,
            loaded: true
        });
    }

    renderGetPart = () => {
        return (
            <div>
                {this.renderPart('get')}
            </div>
        );
    }

    renderPostPart = () => {
        return (
            <div>
                {this.renderPart('post')}
            </div>
        );
    }

    renderPutPart = () => {
        return (
            <div>
                {this.renderPart('put')}
            </div>
        );
    }

    renderDeletePart = () => {
        return (
            <div>
                {this.renderPart('delete')}
            </div>
        );
    }


    renderPart = type => {
        return (
            <div>
                <p>
                    <b>
                        URL:
                    </b>
                    &nbsp;
                    <span>
                            {this[type + 'Url']}
                        </span>
                </p>

                <p>
                    <b>
                        Response:
                    </b>
                    &nbsp;
                    <span>
                            {this.state[type]}
                        </span>
                </p>
            </div>
        );
    }

    renderParts = () => {
        if (this.state.loaded) {
            return (
                <div>
                    {this.renderGetPart()}
                    {this.renderPostPart()}
                    {this.renderPutPart()}
                    {this.renderDeletePart()}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderParts()}
            </div>
        );
    }
}