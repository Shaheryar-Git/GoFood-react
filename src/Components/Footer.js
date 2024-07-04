import React from "react";

const Footer = () => {
  return (
    <div>
      <>
        <hr />
        <footer className="footer" style={{margin: "11px ", padding: "1px "}} >
          <div className="Container text-center text-md-left ">
            <div className="row text-center text-md-left">
              <div className="col-lg-3 col-md-6 col-12">
                <h3 className="text-warning fw-bold"><img src="/Images/Gofood-logo.png" height={100} width={200}></img></h3>
                <p className="fw-bold text-dark">
                  Our products empower more than 3 billion people around the
                  world to share ideas and offer support.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <br/>
                <h3 className="text-dark fw-bold">PRODUCTS</h3>
                <br/>
                <ul className="fw-bold text-dark fs-4">
                  <em>Pizzas</em>
                  <br />
                  <em>Burgers</em>
                  <br />
                  <em>Pasta</em>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 col-12 text-dark fw-bold">
                <br/>
                <h3 className="text-dark fw-bold">CONTACTS</h3>
                <br/>

                <i className="fa fa-home "></i>Pakistan, lahore, johar town
                <br />
                <i className="fa fa-phone"></i>096669565
                <br />
                <i className="fa fa-envelope"></i>Shaheryar@gmail.com
                <br />
                <i className="fa fa-help"></i>Any help
              </div>

              <div className="col-lg-3 col-md-6 col-12 text-dark fs-5" style={{textDecorationColor: "none"}}>
                <br/>
                <h3 className="text-dark fw-bold ">PROVIDERS</h3>
                
                <a href="https://www.instagram.com/" target="blank"><i className="text-dark">instagram</i> </a>
                <br />
                <a href="https://www.facebook.com/"  target="blank"><i className="text-dark">Facebook</i></a>
                <br />
                <a href="www.linkedin.com"  target="blank"><i className="text-dark">Linkdin</i></a>
                <br />
                <a href="https://www.amazon.com/"  target="blank"><i className="text-dark">Amazon</i></a>
              </div>
            </div>
          </div>
        </footer>
        {/* <footer className="bg-ligt text-dark  mx-auto">
          <div className="d-flex container  text-center text-md-left ">
            <div className="row text-center text-md-left ">
              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                <h3 className="fw-bold"><img src="/Images/Gofood-logo.png" height={100} width={200}></img></h3>
                <p className="fw-bold text-dark">
                  Our products empower more than 3 billion people around the
                  world to share ideas and offer support.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
               <h3>About us</h3>
               <i className="fa fa-home "></i>Pakistan, lahore, johar town
                <br />
                <i className="fa fa-phone"></i>096669565
                <br />
                <i className="fa fa-envelope"></i>Shaheryar@gmail.com
                <br />
                <i className="fa fa-help"></i>Any help

              </div>

              <div className="col-lg-3 col-md-4 col-sm-12 mx-auto">
               <h3 className="text-dark">PRODUCTS</h3>
                
                <ul className="fw-bold text-dark fs-4">
                  <em>Pizzas</em>
                  <br />
                  <em>Burgers</em>
                  <br />
                  <em>Pasta</em>
                </ul>

              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
              <h3 className="text-dark fw-bold ">PROVIDERS</h3>
                
                <a href="https://www.instagram.com/" target="blank"><i className="text-dark">instagram</i> </a>
                <br />
                <a href="https://www.facebook.com/"  target="blank"><i className="text-dark">Facebook</i></a>
                <br />
                <a href="www.linkedin.com"  target="blank"><i className="text-dark">Linkdin</i></a>
                <br />
                <a href="https://www.amazon.com/"  target="blank"><i className="text-dark">Amazon</i></a>

              </div>

          </div>
        </footer> */}
      </>
    </div>
  );
};

export default Footer;
