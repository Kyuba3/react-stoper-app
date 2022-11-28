import { useEffect, useState } from 'react';
import styles from './Container.module.scss';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

const Container = () => {

    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(true);
    const [reset, setReset] = useState(0);

   // interval fuc=nction
    useEffect(() => {

    }, []);

    const starting = () => {
        setStart(true);
        setStop(false);
    } 

    const stoping = () => {
        setStart(false);
        setStop(true);
    }

    const reseting = () => {
        setStart(false);
        setReset(0);
    }
 
    return (
        <div className={styles.container}>
            <Timer time={reset} />
            <div className={styles.button}>
                <Button onClick={starting}>Start</Button>
                <Button onClick={stoping}>Stop</Button>
                <Button onClick={reseting}>Reset</Button>
            </div>
        </div>
    );
};

export default Container;