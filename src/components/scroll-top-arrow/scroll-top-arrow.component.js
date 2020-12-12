import React from "react";
import './scroll-top-arrow.styles.css'
function ScrollTopArrow({handleScrollUp}) {

    return (
        <div className="scrollup" onClick={handleScrollUp}>
            <i className="fas fa-chevron-up"></i>
        </div>
    )
}

export default ScrollTopArrow