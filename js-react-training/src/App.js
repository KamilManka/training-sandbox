import React, { Suspense } from "react";
import "./App.css";
import { First } from "./First";
import { Wrapper } from "./Wrapper";
import { Card } from "./clients/Card";
import {
  BsFillPeopleFill,
  BsFillBagCheckFill,
  BsFillFileEarmarkRuledFill,
  BsFillHddRackFill,
} from "react-icons/bs";
import { AsideMenu } from "./AsideMenu";
import { FileTree } from "./FileTree";
import { data, menuData, cards, singleData, someTextInfos } from "./Data.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { OrderId } from "./orders/OrderId";
import { AddClient } from "./clients/AddClient";
import { ClientId } from "./clients/ClientId";
import { EditClient } from "./clients/EditClient";
import { AddOrder } from "./orders/AddOrder";
import { Invoices } from "./Invoices";
import { Orders } from "./orders/Orders";
import { FakeLoginComponent } from "./FakeLoginComponent";
import { Main } from "./Main";
import { FakeRegisterComponent } from "./FakeRegisterComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { ProtectedWrapper } from "./ProtectedWrapper";
import { Navbar } from "./components/Navbar";
import OuterWrapper from "./OuterWrapper";
import PageWrapper from "./PageWrapper";
import { NotificationProvider } from "./contexts/NotificationContext";
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from "./redux/authSlice";
import { Posts } from "./Hooks/Posts";
import { Money } from "./Money";

const Clients = React.lazy(() => import("./clients/Clients"));

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <Suspense fallback={<div class="lds-dual-ring"></div>}>

      <QueryClientProvider client={queryClient}>
          <ThemeProvider>
          <NotificationProvider>

            <UserProvider>

              <BrowserRouter>

                <OuterWrapper>
                  <Navbar />
                  <PageWrapper>
                    <Routes>
                      <Route path="">
                        <Route index element={<Main />} />
                        <Route path="clients">
                          <Route
                            index
                            element={<Clients clientsData={cards} />}
                          />
                          <Route path="add" element={<AddClient />} />
                          <Route path=":id">
                            <Route index element={<ClientId />} />
                            <Route path="edit" element={<EditClient />} />
                          </Route>
                        </Route>
                        
                        <Route path="orders">
                          <Route index element={<ProtectedWrapper><Orders /></ProtectedWrapper>} />
                          <Route path=":id" element={<OrderId />} />
                          <Route path="add" element={<AddOrder />} />
                        </Route>

                        <Route
                          path="invoices"
                          element={
                            <ProtectedWrapper>
                              <Invoices />
                            </ProtectedWrapper>
                          }
                        />
                        <Route path="posts" element={<Posts />} />
                        <Route path="money" element={<Money />} />
                        <Route path="login" element={<FakeLoginComponent />}></Route>
                        <Route
                          path="register"
                          element={<FakeRegisterComponent />}
                        />
                      </Route>
                      <Route element={<div>404</div>} path="*" />
                    </Routes>
                  </PageWrapper>
                </OuterWrapper>
              </BrowserRouter>

            </UserProvider>
            </NotificationProvider>


          </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
