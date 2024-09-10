import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const About = lazy(() => import('../pages/About'));
const CreateProposal = lazy(() => import('../pages/CreateProposal'));
const Login = lazy(() => import('../pages/login'));
const SubmitProposal = lazy(() => import('../pages/SubmitProposal'));
const ProjectDetails = lazy(() => import('../pages/projectdetail/ProjectDetails'));
const StudentProjectDetails = lazy(() => import('../pages/projectdetail/StudentProjectDetails'));
const Fund = lazy(() =>
  import("../components/FundingSuccess")
);
const CommunityLayout = lazy(() => import("../layout/CommunityLayout"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const CommunityDetails = lazy(() => import("../pages/dashboard/CommunityDetails"));


const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/create-proposal" element={<CreateProposal />} />
      <Route path="/submit-proposal" element={<SubmitProposal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fund/:id" element={<ProjectDetails />} />
      <Route path="/student-details" element={<StudentProjectDetails />}
      />
      <Route path="/fund-modal/:id" element={<Fund />} />
    </Route>
    <Route path="/dashboard" element={<CommunityLayout />} >
      <Route index element={<Dashboard />} />
      <Route path="community-details" element={<CommunityDetails />} />
    </Route>

  </Route>
))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;