import './Hero.css'

function Hero() {
    return (
        <section id='hero' className='hero'>
            <div className='hero-container'>
                <div className="hero_content">
                    <p className="hero_greeting">Hello, I am Anirah Destiny</p>
                    <h1 className="hero_name"></h1>
                    <p className="hero_title"></p>
                    <p className="hero_bio"></p>

                    <div className="hero_buttons">
                        <a href="#contact" className='hero_button'>Contact</a>
                        <a href="#cv" className='btn btn--outline'>Download</a>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default Hero