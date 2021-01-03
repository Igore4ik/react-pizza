import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPizzaBlock = (props) => (
    <ContentLoader className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="132" r="130" />
        <rect x="-4" y="276" rx="4" ry="4" width="280" height="27" />
        <rect x="-3" y="324" rx="11" ry="11" width="280" height="88" />
        <rect x="0" y="425" rx="2" ry="2" width="84" height="37" />
        <rect x="139" y="421" rx="20" ry="20" width="130" height="37" />
    </ContentLoader>
)

export default LoaderPizzaBlock;