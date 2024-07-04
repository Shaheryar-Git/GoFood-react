import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Badge from "@mui/material/Badge";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  let items = useSelector((state) => state.CartReducer.carts)
  // console.log("HEADER DATA",items);


  let navigate = useNavigate()

  const item = () => {
    if(items.length === 0){
      toast(' Your cart is empty. Add some products!', {
        position: "top-center",
        autoClose: 4000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    navigate('/home')
    }
  }

  return (
    <div>
       <div>
    <nav
      className="navbar active "  style={{backgroundColor:"#FFA500",  position: "fixed" , width: "100%", zIndex: "100"}} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{height:"70px"}}>
          <em className="fw-bold">
            <img height={80} src="/Images/Gofood-logo.png" alt="Gofood Logo"></img>
          </em>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <marquee className="fw-bold fs-5 me-3">
            <em>
              "Fast food, slow regrets."
              <br /> "Quick bites, big delights."
            </em>
          </marquee>
        </div>
        <Link to={items.length > 0  ? "/cart" : "/home"} onClick={() => item()} className="nav-link text-dark fw-bold mt-3 me-2 ms-auto">
            <Badge  badgeContent={items.length} color="primary">
              <i className="fa-solid fw-bold fa-cart-shopping fs-2"></i>
            </Badge>
          </Link>
      </div>
    </nav>
  </div>
    </div>
     )
}

export default Navbar
