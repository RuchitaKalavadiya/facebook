import { useEffect } from "react";
import Facebook from "./modules/Views";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    document.title = "Peter Johns | Facebook";
  }, []);
  return (
    <Facebook />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
