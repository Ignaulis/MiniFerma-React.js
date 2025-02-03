import { useEffect, useState } from 'react';
import '../Styles/Button.css';
import '../Styles/Ganykla.css';
import house from '../assets/11297074_4121.svg';
import house2 from '../assets/house.svg';
import { randNum, randId } from './rand';
import Gyvuliai from './Gyvuliai';
import {animalTypes} from './types';


export default function Ganykla() {

    const [laukan, setLaukan] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('gyvuliai');
        if (saved) {
            setLaukan(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('gyvuliai', JSON.stringify(laukan))
    }, [laukan]);

    const handleLaukan = () => {
        const newAnimal = animalTypes.flatMap(type =>
            Array.from({ length: randNum() }, () => ({
                id: randId(type),
                type: type
            }))
        )

        setLaukan(prev => [...prev, ...newAnimal])
    }

    const handleTvartan = () => {
        setLaukan([])
    }

    const handleMove = (id) => {
        setLaukan(prev => {
            const animalId = prev.findIndex(animal => animal.id === id);
            const animal = prev[animalId];
            const targetAnimal = animal.type === 'Karves' ? 'Avys' : 'Karves';
            const updatedAnimal = { ...animal, type: targetAnimal };

            return [
                ...prev.filter((_, index) => index !== animalId),
                updatedAnimal
            ]
        })
    };


    return (
        <div className="wrapper">
            <div className="top">
                <div>
                    <button className="button-19" onClick={handleLaukan}>į ganyklą</button>
                    <button className="button-19" onClick={handleTvartan}>tvartan</button>
                </div>
            </div>
            <div className='bot'>
                {animalTypes.map(type => (
                    <div className='bot-wrap' key={type}>
                        <img src={type === 'Karves' ? house : house2} className={type === 'Karves' ? 'pht1' : 'pht2'} />
                        <div className={type === 'Karves' ? 'ganykla ganykla1' : 'ganykla'}>
                            <h2>{type}</h2>
                            <div className='gyvunu-wrap'>

                                {laukan.filter(e => e.type === type).map(e => (
                                    <Gyvuliai onClick={() => handleMove(e.id)} key={e.id} id={e.id} />
                                ))}


                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>

    );
}