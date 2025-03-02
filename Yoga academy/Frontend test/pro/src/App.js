import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landingpage/Landing';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './admin/AdminDashboard';
import Events from './admin/Events';
import Reviews from './admin/Reviews';
import Dashboard from './dashboard/Dashboard';
import Programs from './dashboard/pages/Programs/Programs';
import Practice from './dashboard/pages/Practice/Practice';
import AdminValidationForm from './admin/AdminValidationform';
import Livestream from './dashboard/pages/Livestream/Livestream';
import Courses from './dashboard/pages/Courses/Courses';
import PaymentPage from './dashboard/pages/Courses/PaymentPage';
import AdminCourses from './admin/AdminCourses';
import HelpEmail from './components/forgetpassword/HelpEmail'
import Otp from './components/forgetpassword/Otp'
import NewPassword from './components/forgetpassword/NewPassword'
import { AppProvider } from './context/AppContext';
import Progress from './dashboard/pages/Courses/Progress';
import Enrollments from './admin/Enrollments';
import TherapyBooking from './dashboard/pages/Therapies/TherapyBooking';

const App = () => {
    
    const [user, setUser] = useState(null);

    return (
        <AppProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/login' element={<LoginForm setUser={setUser} />} />
                        <Route path='/signup' element={<RegisterForm setUser={setUser} />} />
                        <Route path='/adminvalidation' element={<AdminValidationForm />} />
                        <Route path='/admin' element={<AdminDashboard />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/admincourses' element={<AdminCourses />} />
                        <Route path='/reviews' element={<Reviews />} />
                        <Route path='/enrollments' element={<Enrollments/>} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/programs' element={<Programs user={user}/>} />
                        <Route path='/practice' element={<Practice user={user}/>} />
                        <Route path='/livestream' element={<Livestream />} />
                        <Route path='/courses' element={<Courses user={user} />} />
                        <Route path='/progress' element={<Progress/>} />
                        <Route path='/payment' element={<PaymentPage />} />
                        <Route path='/therapies' element={<TherapyBooking />} />
                        <Route path = "/helpemail" element = {<HelpEmail/>}></Route>
                        <Route path = "/otp" element = {<Otp/>}></Route>
                        <Route path = "/newpassword" element = {<NewPassword/>}></Route>
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
