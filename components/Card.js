import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    @media(max-width: 768px){
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
`;

const Image = styled.div`
    width: 75px;
    height: 75px;
    margin: 40px 30px 40px 0;
    @media(max-width: 768px){
        margin: 75px 50px 25px;
    }
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const Content = styled.div`
    width: calc(100% - 150px);
    @media(max-width: 768px){
        width: 100%;
    }
    h3{
        font-size: 30px;
        margin-bottom: 16px;
    }
`;

export const Card = (props) => {
    return(
        <Wrapper>
            <Image src={props.image}/>
            <Content>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </Content>
        </Wrapper>
    )
}