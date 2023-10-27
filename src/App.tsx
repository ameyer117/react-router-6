import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import Faq from "./pages/Faq.tsx";
import Contact from "./pages/Contact.tsx";
import HelpLayout from "./layouts/HelpLayout.tsx";
import { NotFound } from "./pages/NotFound.tsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Route>
));

function App() {

  return <RouterProvider router={router} />
}

export default App
