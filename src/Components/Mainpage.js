import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState} from "react";
import { Delete } from "../redux/action/actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Mainpage = () => {
  const [quantity, setQuantity] = useState({});

 

  const IncreaseQ = (id) => {
    setQuantity( (prevQuantity) => ({
      ...prevQuantity,
      [id]: ( prevQuantity[id] || 1 )+1
    }))
  };

  const DecreaseQ = (id) => {
    if (quantity[id] >= 2) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [id]: (prevQuantity[id] || 1) - 1,
      }));
    }
  };

  let items = useSelector((state) => state.CartReducer.carts);
  console.log("HEADER DATA", items);

  let navigate = useNavigate()


  if (items.length === 0) {
    toast(' Your Cart is Empty. Add Some Products!', {
      position: "top-center",
      autoClose: 4000, 
      hideProgressBar: false,
      closeOnClick: true,
      bodyClassName:"text-dark",
    // pauseOnHover: true,
      // draggable: true,
      
  });
  navigate('/')
  }


  const dispatch = useDispatch();

  const DELETE = (id) => {
    dispatch(Delete(id));
    toast.error(' Item Deleted From Cart !',{
      position: "top-center",
      autoClose: 2000, 
      hideProgressBar: false,
      closeOnClick: false,
      // pauseOnHover: true,
      // draggable: true,
      bodyClassName:"text-danger text-center fw-bolder"
  });
  };

 const Total = (ele,quantity) =>{
  return quantity * ele.price
 }

  const subTotal = items.reduce(
    (acc,ele) => acc + Total (ele,quantity[ele.id]|| 1 ),0
  );
 

  return (
    <div>
      <div>
        <h1 className="text-center">Go-food order form</h1>
        <hr />
          <div className="container">
          <div className="row1 row "> 
            <div className="col-xl-8 mt-5">
              {items.map((ele) => (
                <div className="card shadow-lg mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-start border-bottom pb-3">
                      <div className="me-4">
                        <img
                          src={ele.photo}
                          height={120}
                          alt
                          className="avatar-lg rounded"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text1  text-truncate font-size-20 text-center">
                            <a href="#" className="text-dark">
                              {ele.name}
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="flex-shrink-0 my-4">
                        <ul className="list-inline mb-0 font-size-16">
                          <button className="btn">
                            <i
                              className="fa-sharp fa-solid fa-trash fs-3 "
                              onClick={() => DELETE(ele.id)}
                            ></i>
                          </button>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2 ms-3">Price</p>
                            <h5 className="mb-0 mt-2">
                              <span className="text-muted me-2"></span>RS :
                              {ele.price}
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Quantity</p>
                            <button
                              className="btn fs-5"
                              onClick={() => DecreaseQ(ele.id)}
                            >
                              -
                            </button>
                            {quantity[ele.id] || 1}
                            <button
                              className="btn fs-5"
                              onClick={() => IncreaseQ(ele.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Total</p>
                            <h5>
                              {Total(ele,quantity[ele.id] || 1)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="d-flex justify-content-center">
                <div className="col-xl-4 mt-auto">
                  <div className="mt-5 mt-lg-0">
                    <div className="card border shadow-5">
                      <div className="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 className="font-size-16 mb-0 text-center">
                          Order Summary
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <td> Total Amount :</td>
                                <td className="total-amount animate__animated animate__rubberBand ">RS : {subTotal}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4 ">
                <div className="col-sm-6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <a href="/signin" className="checkbtn  btn btn-success">
                      <i className="mdi mdi-cart-outline" /> Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Mainpage;
