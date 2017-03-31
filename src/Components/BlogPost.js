import React, { Component } from 'react';


var BlogPost = React.createClass({
  render: function() {
    return (
        <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
               <a href="single-standard.html" className="thumb-link">
                  <img src="images/thumbs/diagonal-building.jpg" alt="building" />
               </a>
            </div>
                <div className="entry-text">
                    <div className="entry-header">

                        <div className="entry-meta">
                            <span className="cat-links">
                                <a href="#"></a>
                                <a href="#"></a>
                            </span>
                        </div>

                        <h1 className="entry-title"><a href="single-standard.html"></a>{this.props.title}</h1>

                    </div>
                    <div className="entry-excerpt">
                        {this.props.content}
                    </div>
                </div>
        </article>
    );
  }
});

export default BlogPost;
