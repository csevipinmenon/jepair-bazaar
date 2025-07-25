import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Visit from "./components/Visit/Visit.jsx";
import About from "./components/About/About.jsx";
import Enquiry from "./components/Enquiry/Enquiry.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Login from "./components/Login/Login.jsx";
import Book from "./components/Book/Books.jsx";
import BookProcess from "./components/BookingState/BookProcess.jsx";
import Faq from "./components/Faq/Faq.jsx";
import "react-toastify/ReactToastify.css";
import Success from "./components/payment/Success.jsx";
import Cancel from "./components/payment/Cancel.jsx";
import AdminChat from "./components/chat/AdminChat.jsx";
import UserChat from "./components/chat/UserChat.jsx";
import UpdateStatus from "./components/updateOrderStatus/UpdateStatus.jsx";
import AdminUsers from "./components/admin/GetAllUsers.jsx";
import TermCondition from "./components/termAndCondition/TermCondition.jsx";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy.jsx";
import Team from "./components/ourteam/Team.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="visit" element={<Visit />} />
      <Route path="about" element={<About />} />
      <Route path="enquiry" element={<Enquiry />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="login" element={<Login />} />
      <Route path="yourbook" element={<Book />} />
      <Route path="bookprocess" element={<BookProcess />} />
      <Route path="faq" element={<Faq />} />
      <Route path="chat" element={<UserChat />} />
      <Route path="adminchat" element={<AdminChat />} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Cancel />} />
      <Route path="updatestatus" element={<UpdateStatus />} />
      <Route path="allusers" element={<AdminUsers />} />
      <Route path="termcondition" element={<TermCondition/>}/>
      <Route path="privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="ourteam" element={<Team/>}/>

      <Route
        path="*"
        element={
          <div>
            <h2 className="text-blck text-center font-bold text-3xl p-16">
              Error. 404 Oops! Page Not Found
            </h2>
          </div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ojdbbmqkesns8ecq.us.auth0.com"
      clientId="59ieCIAmGGp5l8oZVGikVUVa9WI3DLiA"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </Auth0Provider>
  </StrictMode>
);
