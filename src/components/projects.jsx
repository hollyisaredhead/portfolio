import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="work.html">So Pan</a></h3>
										<span><a href="https://so-pan.herokuapp.com/">https://so-pan.herokuapp.com/</a></span>
										</div>
									</div>
								</div>
							</div>
					
							<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Weather App</a></h3>
											<span><a href="https://hollyisaredhead.github.io/weatherapp/">https://hollyisaredhead.github.io/weatherapp/</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Weekly Meal Planner</a></h3>
											<span><a href ="https://hollyisaredhead.github.io/Weekly-meal-planner/" >https://hollyisaredhead.github.io/Weekly-meal-planner/</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Employee Directory</a></h3>
											<span><a href="https://hollyisaredhead.github.io/employeedir/">https://hollyisaredhead.github.io/employeedir/</a></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
