import { Button } from '@material-ui/core';
import React from 'react';

class StatefullComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    //
    // componentDidMount() {
    //     // Chamado quando o componente inicia
    // }
    //
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // Chamado se o componente atualiza
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // define se o componente deve atualizar
    // }
    //
    // componentWillUnmount() {
    //     // Como um destrutor chamado quando o componente é retirado do dom ou destruido
    // }

    render() {
        return (
            <article>
                {
                    this.state.count === 0 ?
                        <p>Você não clicou.</p> :
                        <p>Você clicou {this.state.count} vezes.</p>
                }
                <Button variant="contained" color="secondary" onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clique aqui
                </Button>
            </article>
        );
    }
}

export default StatefullComponent;