import styles from "./Freelancers.module.scss"
import Link from "next/link"
import FreelancerProfile from "./FreelancerProfile/FreelancerProfile"

const Freelancers = ({ freelancers }: any): JSX.Element => {
  return (
    <section className={styles.freelancers}>
      <div className={styles.freelancers__container}>
        <div className={styles.freelancers__title}>
          <h3>Выбирайте лучших фрилансеров</h3>
          <Link href='/freelancers'>Все фрилансеры</Link>
        </div>
        <div className={styles.freelancers__content}>
          {freelancers ?
            freelancers.slice(0, 6).map((freelancer: any) => (
              <FreelancerProfile item={freelancer} />
            )) : ""
          }
        </div>
      </div>
    </section>
  )
}

export default Freelancers
