import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './ComponentFolders/AboutPage/About';
import HomePageMain from './ComponentFolders/HomePage/HomePageMain';
import Login from './ComponentFolders/LoginPage/Login';
import SignUp from './ComponentFolders/SignUpPage/SignUp';
// import AddCardPage from './ComponentFolders/AddCardPage/AddCardPage';
// import BlogPage from './ComponentFolders/BlogPage/BlogPageMain';
// import BookingPage1 from './ComponentFolders/BookingPage/BookingPage1';
// import BookingPage2 from './ComponentFolders/BookingPage/BookingPage2';
// import BookingPage3 from './ComponentFolders/BookingPage/BookingPage3';
// import BookingPage4 from './ComponentFolders/BookingPage/BookingPage4';
// import BookingPage5 from './ComponentFolders/BookingPage/BookingPage5';
// import BookingPage6 from './ComponentFolders/BookingPage/BookingPage6';
// import BookingPage7 from './ComponentFolders/BookingPage/BookingPage7';
// import BookingPage8 from './ComponentFolders/BookingPage/BookingPage8';
// import CareersPage from './ComponentFolders/CareersPage/CareersPageMain';
// import ContactUsPage from './ComponentFolders/ContactUsPage/ContactPageMain';
// import EditProfilePage from './ComponentFolders/EditProfilePage/EditProfileMain';
// import Footer from './ComponentFolders/Footer/Footer';
// import Navbar from './ComponentFolders/Navbar/Navbar';
// import RequirementsPage from './ComponentFolders/RequirementsPage/Requirements';
// import SavedCardsPage from './ComponentFolders/SavedCardsPage/SavedCardsPage';
// import TeamPage from './ComponentFolders/TeamPage/TeamPageMain';
// import ThankYouPage from './ComponentFolders/ThankYouPage/ThankYou';
// import TherapistCreatePage from './ComponentFolders/TherapistCreatePage/TherapistCreatePage';
// import TicketPruchasePage from './ComponentFolders/TicketPurchasePage/TicketPurchasePage';

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="navbar" element={<Navbar />} /> */}
      <Routes>
        <Route index exact path="/" element={<HomePageMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="addcard" element={<AddCardPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="booking1" element={<BookingPage1 />} />
        <Route path="booking2" element={<BookingPage2 />} />
        <Route path="booking3" element={<BookingPage3 />} />
        <Route path="booking4" element={<BookingPage4 />} />
        <Route path="booking5" element={<BookingPage5 />} />
        <Route path="booking6" element={<BookingPage6 />} />
        <Route path="booking7" element={<BookingPage7 />} />
        <Route path="booking8" element={<BookingPage8 />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contactus" element={<ContactUsPage />} />
        <Route path="editprofile" element={<EditProfilePage />} />
        <Route path="requirements" element={<RequirementsPage />} />
        <Route path="savedcards" element={<SavedCardsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="thankyou" element={<ThankYouPage />} />
        <Route path="therapistcreate" element={<TherapistCreatePage />} />
        <Route path="ticketpurchase" element={<TicketPruchasePage />} />
         */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
