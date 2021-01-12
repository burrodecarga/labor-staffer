import styled from "@emotion/styled"
import { rem } from "polished"

function Header() {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="logo">
          <img src="assets/logo/logo.png" alt="Logo" />
          <span className="logo-text">Labor-Staffer</span>
        </div>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
background: ${(props) => props.theme.colors.primary}
padding:20px;
.logo {
    display:flex;
    align-items:center;

  .logo-text {
    color:#3333;
    font-weight:bold;
    font-size:${rem(20)};
    margin-left:20px;
}
}

};
`

export default Header
