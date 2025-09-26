import styles from './PaymentsTable.module.scss';

const payments = [
  { id: 1, name: "Имя", email: "jourrapide.com", status: "unpaid", progress: 96 },
  { id: 2, name: "Gregory Davis A", email: "gregorydavis@dayrep.com", status: "paid", progress: 73 },
  { id: 3, name: "Gregory Davis A", email: "gregorydavis@dayrep.com", status: "paid", progress: 73 },
];

export default function PaymentsTable() {
  return (
    <div className={styles.payments}>
      <div className='name'>
        <div className="blue"></div>
        <h4 className='typography'>Платежи</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Статус</th>
            <th>Выполнено</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p.id}>
              <td>
                <div>{p.name}</div>
                <div>{p.email}</div>
              </td>
              <td className={`${styles.status} ${p.status === "paid" ? styles.paid : styles.unpaid}`}>
                {p.status === "paid" ? "Оплачено" : "Не оплачено"}
              </td>
              <td>
                <div className={styles.progress}>
                  <div className={styles['progress-bar']} style={{ width: `${p.progress}%` }} />
                </div>
              </td>
              <td className={styles.action}>Смотреть</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
