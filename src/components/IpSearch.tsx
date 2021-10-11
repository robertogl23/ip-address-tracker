import { FormEvent } from 'react'
import styles from '../css/ipSearch.module.css';
interface Props {
    handleFormSubmit: (event:FormEvent<HTMLFormElement>) => void;
    handleChangeText: ( text: string ) => void
}

const IpSearch = ({
    handleFormSubmit,
    handleChangeText
}: Props) => {
    return (
        <div className={styles.search_box}>
            <h1>IP Address Tracker</h1>
            <form 
                onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    onChange={(e) => handleChangeText(e.target.value)} />
                <button type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="14">
                    <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default IpSearch
