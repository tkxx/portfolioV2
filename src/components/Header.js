import React from 'react'
import PropTypes from 'prop-types'
import peaceIcon from '../images/wocPeaceSign.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="brand image">
      <span className="icon woc-peace-fingers">
        <img
          src={peaceIcon}
          alt="tanned hand with red nail polish has two fingers up as peace symbol"
        />
        {/* Peace sign image is from Canva. */}
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Tabitha Sin</h1>
        <p>Full stack web developer. Storyteller. Advocate.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Skills {'&'} Experience
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
