MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="../images/siggy.jpg" />
              <span className="card-title white-text"><b>Sigrunn Sky</b></span>
            </div>
            <div className="card-content">
              <p>I am Sigrunn Sky, of Norwegian blood,
               but raised in California. I am studying Computer Science
                at the University of Colorado in Boulder. 
                Things that get me fired up include skiing and outdoors,
                 artsy things like painting and photography, but most 
                 importantly the people in my life. 
                 Also the question: "How can we make people's lives better with technology?" </p>
            </div>
            <div clasName="card-action">
              <a href="https://github.com/sigrunnsky">Sigrunn's GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
