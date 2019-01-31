import React from 'react'

import ContentLoader from "react-content-loader"

const Loading = props => (
    <ContentLoader
        height={400}
        width={400}
        speed={4}
        primaryColor="#939090"
        secondaryColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="5" ry="5" width="400" height="50" />
        <rect x="0" y="80" rx="5" ry="5" width="400" height="50" />
        <rect x="0" y="160" rx="5" ry="5" width="400" height="50" />
        <rect x="0" y="240" rx="5" ry="5" width="400" height="50" />
    </ContentLoader>
)
export default Loading;