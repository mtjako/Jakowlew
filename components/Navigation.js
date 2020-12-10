import styled from 'styled-components';

const Background = styled.nav`
    width: 100%;
    height: 75px;
    background-color: #1119;
    backdrop-filter: saturate(180%) blur(20px);
    margin-top: -75px;
    position: sticky; 
    z-index: 2;
    top: 0;
    left: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logo = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 75px;
`;

const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
`;

const MenuItem = styled.li`
    display: block;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 75px;
    padding-left: 64px;
`;

export const Navigation = () => {
    return(
        <Background>
            <Wrapper>
                <Logo>Jakowlew</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>O mnie</MenuItem>
                    <MenuItem>Portfolio</MenuItem>
                    <MenuItem>Kontakt</MenuItem>
                </Menu>
            </Wrapper>
        </Background>
    )
}