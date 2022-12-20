import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Data from "./components/data";
import Addgroup from "./components/addgroup";
import AddUser from "./components/AddUser";
// import  DeleteGroup from './components/DeleteGroup';
import { DataContainer } from "./components/DataContainer";
import Grouppage from "./components/grouppage";
import ShowMember from "./components/ShowMember";
import Filehistory from "./components/Filehistory";
import { testService } from "./services/test.service";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Suspense } from "react";
const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const getFakeData = async () => {
      const res = await testService.testGet();
      console.log(res?.data);
    };

    getFakeData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<>Loading</>}>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/login/register" element={<Register />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route exact path="/" element={<Home />}>
              <Route path="addgroup" element={<Addgroup />}></Route>
              <Route path="data" element={<DataContainer />}>
                <Route index element={<Data />} />
                <Route path="addgroup" element={<Addgroup />}></Route>
                <Route path="addgroup" element={<Addgroup />}></Route>
              </Route>
              <Route path="grouppage" element={<Grouppage />}></Route>
              <Route path="adduser" element={<AddUser />}></Route>
              {/* <Route path='/deletegroup' element={<DeleteGroup />}></Route> */}
              <Route path="showmember" element={<ShowMember />}></Route>
              <Route path="filehistory" element={<Filehistory />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </QueryClientProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
