import React from "react"
import ContentLoader from "react-content-loader"

const OrderItemSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={910}
        height={213}
        viewBox="0 0 910 213"
        backgroundColor="#f3f3f3"
        foregroundColor="#4DB85C"
        {...props}
    >
        <rect x="-1" y="2" rx="0" ry="0" width="652" height="35" />
        <rect x="0" y="55" rx="0" ry="0" width="909" height="55" />
        <rect x="0" y="129" rx="0" ry="0" width="130" height="25" />
        <rect x="790" y="129" rx="0" ry="0" width="130" height="25" />
        <rect x="0" y="175" rx="0" ry="0" width="130" height="25" />
        <rect x="790" y="175" rx="0" ry="0" width="130" height="25" />
    </ContentLoader>
)

export default OrderItemSkeleton