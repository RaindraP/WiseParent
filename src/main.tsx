import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentingGuide from "./pages/ParentingGuide.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ArticleDetails from "./pages/ArticleDetails.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Courses from "./pages/Courses.tsx";
import CourseDetails from "./pages/CourseDetails.tsx";
import Schedule from "./pages/Schedule.tsx";
import ContextWrapper from "./context/ContextWrapper.tsx";
import KidsZone from "./pages/KidsZone.tsx";
import ScheduleHome from "./pages/ScheduleHome.tsx";
import Kisahnesia from "./pages/Kisahnesia.tsx";
import StoryDetails from "./pages/StoryDetails.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/parenting" element={<ParentingGuide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<ScheduleHome />} />
          <Route path="/kidszone/kisahnesia" element={<Kisahnesia />} />
          <Route path="/kidszone/kisahnesia/:slug" element={<StoryDetails />} />
          <Route path="/schedule/area15" element={<Schedule />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/kidszone" element={<KidsZone />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/parenting/article/:slug" element={<ArticleDetails />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>
);
