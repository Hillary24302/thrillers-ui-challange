import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import WebRoutes from "../../routes/route";
import DefaultRoute from "./default-route";

const AppRoutes = () => {
  const isAuthenticated =  true;
  return (
    <BrowserRouter>
      <Routes>
      {
          WebRoutes?.map((webRoute, index) => {
            if (webRoute?.protected) {
              return <Route key={index} path={webRoute.path} 
                element={
                  <ProtectedRoute 
                    isAuthenticated={isAuthenticated} 
                    layout={webRoute.layout}
                    component={webRoute.component}
                  />
                } 
              />
            }
            else {
              return <Route key={index} path={webRoute.path} 
                  element={
                    <DefaultRoute 
                      layout={webRoute.layout}
                      component={webRoute.component}
                    />
                  } 
              />
            }
          })
        }
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
