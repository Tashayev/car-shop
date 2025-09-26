import "./profile.scss"
export default function ProfilePage() {
  return (
    <div className="profile-card">
      <div className='name'>
        <div className="blue"></div>
        <h4 className='typography'>Профиль</h4>
      </div>
      <div className='profile'>
        <div className="profile-card__avatar">
          <img src="/user1.png" />
        </div>
        <div className="form">
          <div className="profile-card__form-group">
            <label className="profile-card__label">Имя</label>
            <input
              type="text"
              className="profile-card__input"

            />
          </div>

          <div className="profile-card__form-group">
            <label className="profile-card__label">Email</label>
            <input
              type="email"
              className="profile-card__input"

            />
          </div>
          <div className="profile-card__form-group">
            <label className="profile-card__label">Телефон</label>
            <input
              type="text"
              className="profile-card__input"

            />
          </div>

          <div className="profile-card__form-group">
            <label className="profile-card__label">Адрес</label>
            <input
              type="email"
              className="profile-card__input"

            />

          </div>
          <button className="sub-btn" type="submit" >
            Редактировать
          </button>
        </div>
      </div>
    </div>
  )
}
