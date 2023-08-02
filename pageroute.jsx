import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Mounting from "../pages/Mounting";
import Unmounting from "../pages/Unmounting";
import Update from "../pages/Update";
import routes from './routes.json'

const Pageroute=()=>{
return(
    <Routes>
        <Route path={routes.MOUNT} element={<Mounting/>}/>
        <Route path={routes.UPDATE} element={<Update/>}/>
        <Route path={routes.UNMOUNT} element={<Unmounting/>}/>
         <Route path='*' element={<Error/>}/>
    </Routes>
)
}

export default Pageroute;