import avis from '../assets/sheep-svgrepo-com.svg';
import karve from '../assets/cow-svgrepo-com.svg';
import '../Styles/Gyvuliai.css'

export default function Gyvuliai({id, onClick}) {

    const gyvunas = id.startsWith('K') ? karve : avis;

    return (
        <div className='gyvuliai' onClick={onClick}>
            <img title={id} className='gyvuliai' key={id} src={gyvunas}/>
        </div>
    );
}