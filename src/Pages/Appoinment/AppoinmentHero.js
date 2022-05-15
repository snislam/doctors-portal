import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentHero = ({ date, setDate }) => {

    return (
        <div className='bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero min-h-screen container mx-auto px-10 lg:px-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="w-100 lg:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                    <div className='w-100 lg:w-1/2 text-center lg:text-left'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AppoinmentHero;