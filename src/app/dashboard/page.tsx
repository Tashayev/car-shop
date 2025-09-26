import BroadcastBlock from 'components/BroadcastBlock/BroadcastBlock';
import  './dashboard.scss';
import PaymentsTable from 'components/PaymentsTable/PaymentsTable';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import OrdersSlider from 'components/OrdersSlider/OrdersSlider';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Заголовок <span>подпись</span></h1>

      
      <div className='dashboard-grid'>
        <section className='dashboard-section grid-span-1 '>
          
          <OrdersSlider/>
        </section>

        <aside className='dashboard-section grid-span-2'>
          
          <ProfileCard/>
        </aside>

        <section className='dashboard-section grid-span-3'>
          
          <BroadcastBlock/>
        </section>

        <section className='dashboard-section grid-span-4' >
          
          <PaymentsTable/>
        </section>
      </div>
    </div>
  );
}
