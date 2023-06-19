import ContentLoader from "react-content-loader"
import styles from "./FreelancerProfile.module.scss"

const FreelancerProfileSkeleton = (props) => (
    <div className={styles.freelancer}>
        <div className={styles.freelancer__content}>
            <ContentLoader
                speed={3}
                width={385}
                height={245}
                viewBox="0 0 385 245"
                backgroundColor="#f3f3f3"
                foregroundColor="#4DB85C"
                {...props}
            >
                <rect x="-2" y="5" rx="0" ry="0" width="84" height="72" />
                <rect x="104" y="9" rx="0" ry="0" width="200" height="25" />
                <rect x="-3" y="98" rx="0" ry="0" width="370" height="74" />
                <rect x="105" y="46" rx="0" ry="0" width="200" height="25" />
                <rect x="178" y="203" rx="18" ry="18" width="164" height="35" />
                <rect x="0" y="203" rx="18" ry="18" width="164" height="35" />
            </ContentLoader>
        </div>
    </div>
)

export default FreelancerProfileSkeleton