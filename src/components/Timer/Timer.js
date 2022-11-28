import styles from './Timer.module.scss';

const Timer = ({time}) => {

    const msToTime = (duration) => {
        const miliseconds = Math.floor((duration % 1000) / 100);
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000*60)) % 60 );
        let hours = Math.floor((duration /(1000 *60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + miliseconds;
    }

    return (
        <div className={styles.timer}>
            {msToTime(time)}
        </div>
    );
}

export default Timer;