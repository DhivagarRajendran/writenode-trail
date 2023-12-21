import {Routes , Route} from "react-router-dom";
import { Home } from "../pages/Home";
import {ProtectedRoutes} from "../routes/ProtectedRoutes"
import { CreatePost } from "../pages/CreatePost";
import {PageNotFound} from "../pages/PageNotFound";

export const AllRoutes = () =>{
    return(

        <main>       
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<ProtectedRoutes><CreatePost/></ProtectedRoutes>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </main>
 
    )
}