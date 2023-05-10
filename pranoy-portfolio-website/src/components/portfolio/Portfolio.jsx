import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/weather.png'
import img2 from '../../assets/calculator.png'
import img3 from '../../assets/datav.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="postfolio__item-image">
                        <img src={img1} />
                        <h3>Weather App Using React</h3>
                        <div className="portfolio__item-cta">
                            <a href='https://github.com/developersview/weather-app-react' target='_blank' className='btn'>View Code</a>
                            <a href='https://weather-app-pranoy.vercel.app/' target='_blank' className='btn btn-primary'>Live Demo</a>
                        </div>

                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="postfolio__item-image">
                        <img src={img2} />
                        <h3>Calculator Using React</h3>
                        <div className="portfolio__item-cta">
                            <a href='https://github.com/developersview/react-calculator-app' target='_blank' className='btn'>View Code</a>
                            <a href='https://calculator-app-pranoy.vercel.app/' target='_blank' className='btn btn-primary'>Live Demo</a>
                        </div>

                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="postfolio__item-image">
                        <img src={img3} />
                        <h3>Covid 19 Data Visulization</h3>
                        <div className="portfolio__item-cta">
                            <a href='https://github.com/developersview/Covid19-Visualization' target='_blank' className='btn'>View Code</a>
                            <a href='https://developersview-covid19-visualization-app-fhnttc.streamlit.app/' target='_blank' className='btn btn-primary'>Live Demo</a>
                        </div>

                    </div>
                </article>


            </div>
        </section>
    )
}

export default Portfolio