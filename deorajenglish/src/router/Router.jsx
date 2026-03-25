import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Applayout";
import App from "../App";
import Aboutschool from "../Componets/Aboutschool/Aboutschool";
import Ourinfra from "../pages/Abouttschool/Ourinfra/Ourinfra";
import Visionmission from "../pages/Vision/Visionmission";
import Rte from "../pages/Rte/Rte";
import Admissionprocess from "../pages/Admissionprocess/Admissionprocess";
import Admissionnoti from "../pages/Admissionnoti/Admissionnoti";
import Admissionstru from "../pages/Admissionstru/Admissionstru";
import Onlineregis from "../pages/Onlineregis/Onlineregis";
import Payment from "../pages/Payment/Payment";
import Gallary from "../pages/Gallary/Gallary";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUpdates from "../pages/admin/ManageUpdates";
import ManageGallery from "../pages/admin/ManageGallery";
import ManageEvents from "../pages/admin/ManageEvents";
import ManageUpcoming from "../pages/admin/ManageUpcoming";
import ManageAdmission from "../pages/admin/ManageAdmission";
import AdminGallery from "../pages/admin/AdminGallery";
import Staff from "../pages/Staff/Staff";
import AdminStaff from "../pages/admin/AdminStaff";
import Fee from "../pages/Fee/Fee";
import AdminFee from "../pages/admin/AdminFee";
import Music from "../pages/Music/Music";
import Dance from "../pages/Dance/Dance";
import Yoga from "../pages/Yoga/Yoga";
import Cbse from "../pages/Cbse/Cbse";
import Contact from "../pages/Contact/Contact";
import AcademicCards from "../pages/AcademicCards/AcademicCards";
import AdminInfrastructure from "../pages/admin/AdminInfrastructure";
import Studentdetails from "../pages/Studentdetails/Studentdetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
     { index: true, element: <App /> },  

     {path:"/about-school", element: <Aboutschool/>},
     {path: "/Infrastructure", element: <Ourinfra/>},
     {path: "/vision", element: <Visionmission/>},
     {path: "/rte", element: <Rte/>},
     {path:"/admission-process", element: <Admissionprocess/>},
     {path:"/notification", element: <Admissionnoti/>},
     {path:"/staff-details", element: <Staff/>},
     {path: "/fee", element: <Fee/>},
     {path: "/music", element: <Music/>},
     {path: "/dance", element: <Dance/>},
     {path: "/yoga", element: <Yoga/>},
     {path: "/cbse-info", element: <Cbse/>},
     {path: "/contact", element: <Contact/>},
     {path: "/academics", element: <AcademicCards/>},
     {path: "/student", element: <Studentdetails/>},
     {path:"/admission-structure", element: <Admissionstru/>},
     {path:"/online-registration", element: <Onlineregis/>},
     {path: "/payment", element: <Payment/>},
     {path: "/gallery", element: <Gallary/>},
     {path: "/admin/login", element: <AdminLogin/>},
     {path: "/admin/dashboard", element: <AdminDashboard/>},
     {path: "/admin/manage-updates", element: <ManageUpdates/>},
     {path: "/admin/manage-gallery", element: <ManageGallery/>},
     {path: "/admin/manage-event", element: <ManageEvents/>},
     {path: "/admin/upcoming-events", element: <ManageUpcoming/>},
     {path: "/admin/admission-notification", element: <ManageAdmission/>},
     {path: "/admin/gallery", element: <AdminGallery/>},
     {path: "/admin/staff", element: <AdminStaff/>},
     {path: "/admin/fee", element: <AdminFee/>},
     {path: "/admin/infra", element: <AdminInfrastructure/>}
 ],
  },
]);

export default router;