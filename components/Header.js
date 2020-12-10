import styled from 'styled-components'

const Text = styled.h2`
    font-size: 28px;
    font-weight: 700;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 32px;
    color: #eee;
    &>.bracket{
        color: #999;
    }
`;

export const Header = (props) => {
    return(
    <Text><span className="bracket">{'<'}</span>{props.title}<span className="bracket">{'/>'}</span></Text>
    )
}