import "./payments.scss"

const paymentsData = [
  { accNum: 321312321, date: "16.03.2025", sum: "15,000 тг", status: "Не оплачено" },
  { accNum: 321312322, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
  { accNum: 321312323, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
  { accNum: 321312324, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
  { accNum: 321312325, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
  { accNum: 321312326, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
  { accNum: 321312325, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
  { accNum: 321312326, date: "16.03.2025", sum: "15,000 тг", status: "Оплачено" },
]

export default function PaymentsPage() {
  return (
    <div className="payments">
      <h1>Платежи</h1>

      <div className="table">
        <div className="table-head">
          <h4>Номер счета</h4>
          <h4>Дата</h4>
          <h4>Сумма</h4>
          <h4>Статус</h4>
          <h4>Действие</h4>
        </div>

        <div className="table-body">
          {paymentsData.map((p, i) => (
            <div key={i} className="table-row">
              <div>{p.accNum}</div>
              <div>{p.date}</div>
              <div>{p.sum}</div>
              <div >
                {p.status}
              </div>
              <div>
                <button className={`status ${p.status === "Оплачено" ? "paid" : "unpaid"}`}>Оплатить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
