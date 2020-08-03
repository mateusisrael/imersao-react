import React from 'react';
import Menu from '../../components/Menu';
import FormField from '../../components/FormField'
import styled from 'styled-components';

const CadastroPage = styled.div`
    width: '100%';
    padding-top: 200px;
    margin: 2%;
`;

function CadastroVideo() {
    return (
        <>
            <Menu to="/">Início</Menu>
            <CadastroPage>
                <form>
                    <FormField
                        label="Nome"
                        type="text"
                        name="Nome"
                        onChange={() => console.log('change')}
                    />
                </form>
            </CadastroPage>
        </>
    );
}

export default CadastroVideo;
