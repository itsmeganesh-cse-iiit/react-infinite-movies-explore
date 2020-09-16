import React from 'react'
import ContentLoader from 'react-content-loader'

const Shimmer = props => {
    return (
        <div>
            <ContentLoader
                width={1200}
                height={460}
                speed={2}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
            >
                <rect x="40" y="40" rx="0" ry="0" width="100" height="20" />
                <rect x="40" y="80" rx="0" ry="0" width="300" height="30" />
                <rect x="40" y="130" rx="0" ry="0" width="300" height="30" />
                <rect x="40" y="190" rx="5" ry="5" width="1200" height="30" />
                <rect x="40" y="250" rx="5" ry="5" width="100" height="30" />
                <rect x="250" y="250" rx="5" ry="5" width="100" height="30" />
                <rect x="450" y="250" rx="5" ry="5" width="100" height="30" />
                <rect x="40" y="320" rx="5" ry="5" width="100" height="30" />
                <rect x="250" y="320" rx="5" ry="5" width="100" height="30" />
                <rect x="450" y="320" rx="5" ry="5" width="100" height="30" />
                <rect x="40" y="390" rx="5" ry="5" width="100" height="30" />
            </ContentLoader>
        </div>
    )
}



export default Shimmer