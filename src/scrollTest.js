import React from 'react';

const ScrollnappingAnimations = () => {
    return (
        <div>
            <header className="site-header">
                <h1 className="sr-only">Scrollnapping animations</h1>
                <div className="fieldset-wrapper">
                    <fieldset>
                        <legend className="sr-only">Effects</legend>
                        <input type="radio" id="blink-effect" name="effect" value="blink" checked className="sr-only" />
                        <label htmlFor="blink-effect">Blink</label>
                        <input type="radio" id="horizontal-scroll-effect" name="effect" value="horizontal-scroll" className="sr-only" />
                        <label htmlFor="horizontal-scroll-effect">Horizontal scroll</label>
                        <input type="radio" id="backwards-scroll-effect" name="effect" value="backwards-scroll" className="sr-only" />
                        <label htmlFor="backwards-scroll-effect">Backwards scroll</label>
                        <input type="radio" id="zoom-scroll-effect" name="effect" value="zoom-scroll" className="sr-only" />
                        <label htmlFor="zoom-scroll-effect">Zoom scroll</label>
                    </fieldset>
                </div>
                <nav>
                    <ul className="indicator">
                        <li><a href="#snapping"><span className="sr-only">Snapping</span></a></li>
                        <li><a href="#scrolling"><span className="sr-only">Scrolling</span></a></li>
                        <li><a href="#layout"><span className="sr-only">Layout</span></a></li>
                        <li><a href="#transition"><span className="sr-only">Transition</span></a></li>
                        <li><a href="#caveats"><span className="sr-only">Caveats</span></a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="snapping" className="section">
                    <div className="content">
                        <h2><strong>First</strong>, we set up the <em>snapping</em> points</h2>
                        <div className="text">
                            <img src="https://assets.codepen.io/197359/flower-white.png" alt="" />
                            <p>We set the scrolling element, in this case our <code className="selector">HTML</code> element, to forcibly snap to the Y axis by using <code className="property">scroll-snap-type: y mandatory</code>.</p>
                            <p>And then we set <code className="selector">section</code> as the snapping elements by using <code className="property">scroll-snap-align: start</code>.</p>
                        </div>
                    </div>
                </section>
                {/* Other sections follow... */}
            </main>
            <footer>
                <p>That's it <span className="emoji">🌸</span></p>
            </footer>
        </div>
    );
}

export default ScrollnappingAnimations;
