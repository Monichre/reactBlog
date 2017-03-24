import React, { Component } from 'react';


class Header extends Component {
  render() {

    return (

           <header className="short-header">

               	<div className="gradient-block"></div>

               	    <div className="row header-content">

               		<div className="logo">
            	         <a href="index.html">Author</a>
            	      </div>

            	   	<nav id="main-nav-wrap">
            				<ul className="main-navigation sf-menu">
            					<li className="current"><a href="index.html" title="">Home</a></li>
            					<li className="has-children">
            						<a href="category.html" title="">Categories</a>
            						<ul className="sub-menu">
            			            <li><a href="category.html">Wordpress</a></li>
            			            <li><a href="category.html">HTML</a></li>
            			            <li><a href="category.html">Photography</a></li>
            			            <li><a href="category.html">UI</a></li>
            			            <li><a href="category.html">Mockups</a></li>
            			            <li><a href="category.html">Branding</a></li>
            			         </ul>
            					</li>
            					<li className="has-children">
            						<a href="single-standard.html" title="">Blog</a>
            						<ul className="sub-menu">
            			            <li><a href="single-video.html">Video Post</a></li>
            			            <li><a href="single-audio.html">Audio Post</a></li>
            			            <li><a href="single-gallery.html">Gallery Post</a></li>
            			            <li><a href="single-standard.html">Standard Post</a></li>
            			         </ul>
            					</li>
            					<li><a href="style-guide.html" title="">Styles</a></li>
            					<li><a href="about.html" title="">About</a></li>
            					<li><a href="contact.html" title="">Contact</a></li>
            				</ul>
            			</nav>

            			<div className="search-wrap">

            				<form role="search" method="get" className="search-form" action="#">
            					<label>
            						<span className="hide-content">Search for:</span>
            						<input type="search" className="search-field" placeholder="Type Your Keywords" value="" name="s" title="Search for:" autocomplete="off" />
            					</label>
            					<input type="submit" className="search-submit" value="Search" />
            				</form>

            				<a href="#" id="close-search" className="close-btn">Close</a>

            			</div>

            			<div className="triggers">
            				<a className="search-trigger" href="#"><i className="fa fa-search"></i></a>
            				<a className="menu-toggle" href="#"><span>Menu</span></a>
            			</div>

               	</div>

           </header>


    );

  }
}

export default Header;
