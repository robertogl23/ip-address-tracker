import styles from '../css/details.module.css';
import { IGeoData } from '../interfaces';
import DetailsCard from './DetailsCard';

interface Props {
    geoData?: IGeoData
}
const Details = ({geoData}: Props) => {
    return (
        <div className={styles.details_box}>
            <section>
                <DetailsCard 
                    title={'IP ADDRESS'} 
                    value={geoData?.ip}/>
                <DetailsCard 
                    title={'LOCATION'} 
                    value={geoData?.region}/>
                <DetailsCard 
                    title={'TIMEZONE'} 
                    value={'UTC ' + geoData?.timezone}/>
                <DetailsCard 
                    title={'ISP'} 
                    value={geoData?.isp}/>
            </section>
      </div>
    )
}

export default Details
