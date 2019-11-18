import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/aboutPic.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/skillsImg2.jpg'
import bsIcon from '../images/bootstrapIcon.svg'
import css3Icon from '../images/css3Icon.svg'
import html5Icon from '../images/html5Icon.svg'
import jsIcon from '../images/javascriptIcon.svg'
import reactIcon from '../images/reactIcon.svg'
import pSQLicon from '../images/postgresIcon.svg'
import scssIcon from '../images/scssIcon.svg'
import reduxIcon from '../images/reduxIcon.svg'
import expressJSicon from '../images/expressJSicon.svg'
import gitIcon from '../images/gitIcon.svg'
import nodeJsIcon from '../images/nodeJSwhite.svg'
import '../assets/css/techIcons.css'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Hi, I'm Tabitha</h2>
          <span className="image main">
            <img
              src={pic01}
              alt="Woman standing in front of colorful brick backdrop"
            />
          </span>
          <p>
            <h3>Short Version:</h3> I am a full stack web developer looking for
            my next opportunity to create change. My aim is to create
            aesthetically pleasing and fully functional websites that clients
            enjoy. Whether on my own or collaborating with a team, I dedicate
            myself to ensuring that a story has come to life. I believe in
            creating products that benefit the world at large. View my{' '}
            <a href="#work">work here</a>.
          </p>
          <p>
            <h3>Long Version:</h3> In the life before this one, I used to head
            to Panera during my lunch breaks for their tomato soup, Frontega
            sandwich, and free WiFi. My laptop opened to the latest JavaScript
            problem presented through a free learning service, and my lunch
            would stay uneaten as I tried to understand and solve the problem.
            It was during these moments where it seemed my neurons electrified,
            waking me from a doldrums I didn't know I was experiencing.
            Satisfaction rushed through me when my code eventually passed.
            <p />I no longer wanted to chase after random hours to learn coding,
            and that was how I ended up in Dallas, Texas, attending a full
            stack, web-immersive bootcamp. It was there in the sweltering summer
            heat where I realized I wanted nothing more than to bridge my
            passion for storytelling and advocacy by building web applications
            for the world to see. Good work, progressive missions, should be
            highlighted for everyone.
            <p />
            When I am not trying to think of ways to get people's works out in
            the world, you can find me outlining and writing science
            fiction/horror stories, making dumplings, or training for
            powerlifting.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills {'&'} Experience</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            <div>
              <img src={html5Icon} alt="html icon" className="icon-resize" />
              <span className="tech-skill">HTML</span>
            </div>
            <div>
              <img src={css3Icon} alt="css icon" className="icon-resize" />
              <span className="tech-skill">CSS</span>
            </div>
            <div>
              <img src={jsIcon} alt="javascript icon" className="icon-resize" />
              <span className="tech-skill">JS ES6</span>
            </div>
            <div>
              <img src={reactIcon} alt="react icon" className="icon-resize" />{' '}
              <span className="tech-skill">ReactJS</span>
            </div>
            <div>
              <img src={reduxIcon} alt="redux icon" className="icon-resize" />{' '}
              <span className="tech-skill">Redux</span>
            </div>
            <div className="break"></div>
            <div>
              <img
                src={pSQLicon}
                alt="postgresql icon"
                className="icon-resize"
              />{' '}
              <span className="tech-skill">PostgreSQL</span>
            </div>
            <div>
              <img src={bsIcon} alt="bootstrap icon" className="icon-resize" />{' '}
              <span className="tech-skill">Bootstrap</span>
            </div>
            <div>
              <img src={scssIcon} alt="sass icon" className="icon-resize" />{' '}
              <span className="tech-skill">SCSS</span>
            </div>
            <div>
              <img
                src={expressJSicon}
                alt="express js icon"
                className="icon-resize"
              />{' '}
              <span className="tech-skill">Express</span>
            </div>
            <div>
              <img
                src={nodeJsIcon}
                alt="node js icon"
                className="icon-resize"
              />{' '}
              <span className="tech-skill">NodeJS</span>
            </div>
            <div>
              <img src={gitIcon} alt="git icon" className="icon-resize" />{' '}
              <span className="tech-skill">Git/Github</span>
            </div>
          </div>
          <p />
          <h3>Tech Education</h3>
          <b>Modern React with Redux (Udemy)</b> Oct 2019-Present
          <br />
          React JS Curriculum
          <br />
          React, Redux, React Hooks
          {/* <p /> */}
          <br />
          <br />
          <b>DevMountain (Dallas, Texas)</b> Jun 2019-Sept 2019
          <br />
          Full Stack/SERN Web Immersive Curriculum
          <br />
          Github, HTML/CSS, Javascript, React, Redux, NodeJS, Express,
          PostgreSQL
          <p />
          <h3>PROFESSIONAL EXPERIENCE</h3>
          Click here for more in-depth information.
          <p />
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Me!</h2>
          I'm open to <b>full-time positions</b> or <b>freelance work</b>.
          Please send a message, and I will respond as soon as I can!
          <br />
          <br />
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/lazyloading_"
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/lazy.loading"
                target="_blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tkxx"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@lazy.loading"
                target="_blank"
                className="icon fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
