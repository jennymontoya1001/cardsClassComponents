import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { endpoint } from '../helpers/url';
import CardComponent from './CardComponent';

export default class ListComponent extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const resp = await fetch(endpoint);
        const data = await resp.json();
        const { results } = data;
        console.log(results)
        this.setState({ peliculas: results })
    }

    render() {
        return <Container>
            <hr />
            <Row lg={6}>
                {
                    this.state.peliculas.map(movie => (
                        <CardComponent
                            key={movie.id}
                            movies={movie} />
                    ))
                }
            </Row>
        </Container>;
    }
}
