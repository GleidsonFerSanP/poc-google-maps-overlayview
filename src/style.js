import styled from "styled-components";
import loteamento from './loteamento.jpeg'

export const Lote = styled.div`
    width: 10px;
    background-color: red;
    color: #FFF;
    cursor: pointer;
`;

export const Empreendimento = styled.div`
    background: url(${loteamento});
    width: 300px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
`;