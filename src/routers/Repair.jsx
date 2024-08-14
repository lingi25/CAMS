import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCar, 
    faCarBattery, 
    faTemperatureArrowUp, 
    faCarRear, 
    faCircleDot, 
    faLightbulb, 
    faTools, 
    faCarBurst 
} from '@fortawesome/free-solid-svg-icons';
import "./Repair.css";
import Navi from "./Navi";
import { useCart } from './CartContext';

const servicesData = [
    {
        title: 'Car Periodic Maintenance',
        icon: faCar,
        description: 'Maintain your car and increase its performance with regular servicing from Bosch Car Service.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Multipoint Check',
        icon: faCar,
        description: 'When you feel your car is overused, or you are planning a long road trip, our stem-to-stern check points will ensure to identify any damage or faults.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Seasonal Check-Up',
        icon: faCar,
        description: 'Bosch Car Service recommends giving your vehicle a thorough vehicle check-up at the changing of the seasons.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Battery Check',
        icon: faCarBattery,
        description: 'A simple battery check from Bosch Car Service will help you avoid the inconvenience of a dead battery.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Battery Guarantee',
        icon: faCarBattery,
        description: 'A battery check from Bosch Car Service will help you avoid the inconvenience of a dead battery.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Electronic Diagnosis',
        icon: faCarBattery,
        description: 'Bosch Car Service is able to provide the full spectrum of electrical and electronic services, from diagnosing and repairing problems with the computerized system on your vehicle.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Engine and Car Diagnostic Check',
        icon: faCarRear,
        description: 'A computerized car diagnostic check from Bosch Car Service will give you a true picture of how your vehicle is running.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Oil and Filter Change',
        icon: faCarRear,
        description: 'An oil and filter change might seem like a routine service, but requesting it from Bosch Car Service has some major advantages.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Brake Repair & Maintenance',
        icon: faCircleDot,
        description: 'Brake repair and maintenance at a Bosch Car Service workshop is guaranteed to ensure safety.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Safety Features Check',
        icon: faCircleDot,
        description: 'You can trust the specialists at Bosch Car Service to diagnose and repair problems with any electronic safety system in your vehicle.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Headlight Bulb Check',
        icon: faLightbulb,
        description: 'You can trust the specialists at Bosch Car Service to diagnose and repair problems with any electronic safety system in your vehicle.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Repair Service',
        icon: faTools,
        description: 'Trust us with your car repairs or servicing and enjoy the benefits of having a world-class service provider.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Tyre Service',
        icon: faCarBurst,
        description: 'When you ask Bosch Car Service to replace your tyres, we provide a lot of extra value.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
    {
        title: 'Car Air Conditioning Service',
        icon: faTemperatureArrowUp,
        description: 'The Bosch Car Service experts will be pleased to service your car air conditioning system to ensure a pleasant temperature while you are on the move.',
        price: '₹706.82',
        locationDetails: {
            name: 'City Car Care',
            address: 'Industrial Area, Kirti Nagar, New Delhi, 110015'
        }
    },
];

const Repair = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleAddToCart = (service) => {
        addToCart(service);
    };

    return (
        <div className="repair-container">
            <Navi />
            <header className="repair-header">
                <h1 className='heading'>Car Repair And Maintenance</h1>
            </header>

            <div className="car">
                <h3><b>Car Inspections And Checks</b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(0, 3).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Electronic Services </b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(3, 6).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Engine Services </b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(6, 8).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Brake Service</b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(8, 10).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Headlight Bulb Check</b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(10, 11).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Repair Service</b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(11, 12).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Tyre Service</b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(12, 13).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>

            <div className="car">
                <h3><b>Car Air Conditioning Service</b></h3>
            </div>
            <section className="repair-content">
                {servicesData.slice(13, 14).map(service => (
                    <div className="repair-card" key={service.title}>
                        <FontAwesomeIcon icon={service.icon} className="repair-icon" />
                        <h2 className='title'>{service.title}</h2>
                        <p className='para'>{service.description}</p>
                        <button className='bt' onClick={() => handleAddToCart(service)}>ADD TO CART</button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Repair;
