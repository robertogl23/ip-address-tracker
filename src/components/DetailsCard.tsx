import styles from '../css/detailsCard.module.css';

interface Props {
    title: string;
    value?: string;
}

const DetailsCard = ({value,title}: Props) => (
    <div className={styles.box}>
        <header>
            <span>{title}</span>
            <h3>{value} </h3>
        </header>
        <div className={styles.divider}></div>
    </div>
)


export default DetailsCard
