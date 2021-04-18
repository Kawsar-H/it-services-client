import React, { useContext } from 'react';
import { UserContext } from '../../App';
import ServiceList from './ServiceList/ServiceList';

const Dashboard = () => {
    const [data,setData]=useContext(UserContext)
    document.title='IT-service | Dashboard'
    return (
        <>
            <ServiceList></ServiceList>
        </>
    );
};

export default Dashboard;