import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/literalink-logo-.svg";
import toast from "react-hot-toast";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const logout = useLogout();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShowMenu(false);
      } else {
        setScroll(false);
      }
    });
  }, []);

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";
  let menuActive = showMenu ? "left-0" : "-left-full";

  // Toast Login Success
  useEffect(() => {
    if (sessionStorage.getItem("loginSuccess") === "true") {
      toast.success("Login Success");
      sessionStorage.removeItem("loginSuccess");
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      toast.success("Logout Success");
      setIsLoggedIn(false);
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <div className={`fixed w-full transition-all navbar ${scrollActive}`}>
      <div className="container px-10 mx-auto">
        <div className="flex items-center justify-between navbar-box">
          <div className="logo">
            <a href="#home" className="text-xl font-bold sm:text-2xl">
              LiteraLink.
            </a>
          </div>
          <ul className={`flex lg:gap-12 md:static md:flex-row ... ${menuActive} ...`}>
            <li className="flex items-center gap-3"><a href="#home" className="font-medium opacity-75">Beranda</a></li>
            <li className="flex items-center gap-3"><a href="#about" className="font-medium opacity-75">Tentang Kami</a></li>
            <li className="flex items-center gap-3"><a href="#services" className="font-medium opacity-75">Layanan</a></li>
            <li className="flex items-center gap-3"><a href="#books" className="font-medium opacity-75">Buku</a></li>
          </ul>
          <div className="flex items-center gap-2 sign-in">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="px-5 py-2 text-white transition-all rounded-full bg-sky-400 font-blod hover:bg-sky-500">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-5 py-2 text-white transition-all rounded-full bg-sky-400 font-blod hover:bg-sky-500">
                  Sign In
                </button>
              </Link>
            )}
            <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleMenu}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
