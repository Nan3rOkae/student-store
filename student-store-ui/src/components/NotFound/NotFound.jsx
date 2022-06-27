import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function NotFound() {
  return (
    <div className="notFound">
      <Navbar />
      <Sidebar />
      <p className="anError">Error 404: NOT FOUND</p>
    </div>
  );
}
