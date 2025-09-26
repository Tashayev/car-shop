import './ProfileCard.scss';


export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className='name'>
        <div className="blue"></div>
        <h4 className='typography'>Профиль</h4>
      </div>
      <div className='profile'>
        <div className="profile-card__avatar">
          <img src="/user.png" width={28} height={34} />
        </div>
        <div>
          <div className="profile-card__form-group">
            <label className="profile-card__label">Имя</label>
            <input
              type="text"
              className="profile-card__input"
              defaultValue="Джолдаспаев Алимжан"
            />
          </div>

          <div className="profile-card__form-group">
            <label className="profile-card__label">Email</label>
            <input
              type="email"
              className="profile-card__input"
              defaultValue="alimjan@mail.com"
            />
          </div>
          <div className="profile-card__form-group">
            <label className="profile-card__label">Имя</label>
            <input
              type="text"
              className="profile-card__input"
              defaultValue="Джолдаспаев Алимжан"
            />
          </div>

          <div className="profile-card__form-group">
            <label className="profile-card__label">Email</label>
            <input
              type="email"
              className="profile-card__input"
              defaultValue="alimjan@mail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
