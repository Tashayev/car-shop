import styles from './BroadcastBlock.module.scss';

export default function BroadcastBlock() {
  return (
    <div className={styles.broadcast}>
      <div className={styles.top}>
        <div className='name'>
          <div className="blue"></div>
          <h4 className='typography'>Трансляция</h4>
        </div>
        <div className={styles.liveTag}>
          <img src="/arrow.png" alt="icon" />
          Live
        </div>
      </div>
      <img src="/broadcast/live.jpg" alt="Трансляция" />

    </div>
  );
}
