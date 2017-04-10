import React from 'react';
import { Link, withRouter } from 'react-router';




const Footer = (props) => {

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  debugger
  return (
    <div className="footer">
      <a onClick={scrollToTop}>
        <div className="back-2-top">
          Back to top
        </div>
      </a>


      <div className="footer-text">
        <div className="magazon-description">
            <div className="footer-titles">About Magazon</div>
            <div className="description-text">
              Magazon is a full stack project based on Amazon.com.<br />
            The content (images, product descriptions and product images) is the property of Amazon.com, Inc. and
              used only for educational purposes.
            </div>
        </div>

        <div className="magazon-authors">
          <div className="footer-titles">Project Authors</div>
          <div className="authors-text">
            <span><a href="http://www.petertasc.io/" target="blank">Peter Tascio</a></span>|
            <span><a href="https://github.com/ptascio" target="blank">GitHub</a></span>|
            <span><a href="https://www.linkedin.com/in/peter-tascio-57a2245/" target="blank">LinkedIn</a></span>
            <br />
            <span><a href="http://www.alex-naumov.me/" target="blank">Aleksei Naumov</a></span>|
            <span><a href="https://github.com/naumov78" target="blank">GitHub</a></span>|
            <span><a href="https://www.linkedin.com/in/aleksei-naumov/" target="blank">LinkedIn</a></span><br />
            <span><a href="https://github.com/naumov78/magazon" target="blank">Project GitHub repo</a></span>
          </div>
        </div>
      </div>


    </div>
  )
}


export default withRouter(Footer);
