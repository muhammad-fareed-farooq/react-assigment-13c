import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Appbar } from "../Components/App_Abr";
import Dashboard from "../Pages/Dashboard";
import AllEmail from "../Pages/AllEmail";
import Drafts from "../Pages/Drafts";
import Iinbox from "../Pages/Iinbox";
import SendEmail from "../Pages/SendEmail";
import Spam from "../Pages/Spam";
import Starred from "../Pages/Starred";
import Trash from "../Pages/Trash";
import Layout from "../Pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="dashboard">
        <Route path="allmail" element={<AllEmail />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="inbox" element={<Iinbox />} />
        <Route path="sendemail" element={<SendEmail />} />
        <Route path="spam" element={<Spam />} />
        <Route path="starred" element={<Starred />} />
        <Route path="trash" element={<Trash />} />
      </Route>
    </Route>
  )
);

export default function Routrt_App() {
  return <RouterProvider router={router} />;
}
