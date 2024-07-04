import Products from "../data/dataLists";
import Lists from "../data/list";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/actions";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";
import ClipLoader  from "react-spinners/ClipLoader";
import { useEffect } from "react";


const Cards = () => {
  const [Search, setSearch] = useState("");
  const [list, setList] = useState("");
  // const [loading, setLoading] = useState(false);

  

  // useEffect(() => {

  //   if (Search) {
  //     setLoading(true);
  //      setTimeout(() => {
  //       setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout();
  // }
  // }, [Search]);
  // console.log(Search);

  let dispatch = useDispatch();
  const isItemAdded = useSelector((state) => state.CartReducer.carts);

  const sendItem = (e) => {
    // console.log("DONE");
    const ItemAlrady = isItemAdded.some((item) => item.id === e.id);
    if (ItemAlrady) {
      toast.warning("Item is already in the cart!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        bodyClassName: "text-center fw-bolder",
      });
    } else {
      dispatch(addToCart(e));
      toast.success(" Item added to cart !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        bodyClassName: "text-center fw-bolder",
      });
    }
  };

  

  

  return (
    <>
      <div className="container ">
        <br />
       
        <form className="d-flex  justify-content-center ">
          <input
            className="form-control fw-bold  rounded-pill w-50 border border-dark "
            type="search"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              setList(e.target.value);
            }}
          />
          <button className="btn btn-danger ms-3 " type="submit">
            Search
          </button>
        </form>

        <div className="row">
          {Products.filter((item) => {
            return Search.toLowerCase() === ""
              ? item
              : item.name.includes(Search);
          }).map((ele) => {
            return (
              <div className="products1 col-lg-3 col-md-6 col-sm-12">
                <div className="mx-auto " style={{ width: "18rem" }}>
                  <img
                    src={ele.photo}
                    className="img2 mt-5"
                    style={{
                      width: "18rem",
                      height: "15rem",
                      objectFit: "contain",
                    }}
                  ></img>
                  <div className="card-body">
                    <em className="fw-bold fs-3 ">{ele.name}</em>
                  </div>
                  <div className="container w-75 fs-5 ms-5">
                    <div className="fw-bold fs-3">RS: {ele.price}</div>
                    <button
                      onClick={() => sendItem(ele)}
                      className="btn1 mt-3 "
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* /////////////////// */}

      {!Search && (
        <>
          <div className="container bg-light text-center mt-2 justify-content-center">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12 my-4" data-aos="fade-out">
                    <video
                      src="/Images/production_id_3944332 (2160p).mp4"
                      autoPlay
                      muted
                      width="100%"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12 my-4 p-3">
                    <p className="paragraph fw-bolder">
                      Pizza, a culinary masterpiece that transcends cultural
                      boundaries, is a beloved dish enjoyed worldwide.
                      Originating from Italy, this iconic creation boasts a
                      delectable combination of flavors and textures. A crisp
                      and thin or thick and doughy crust provides the perfect
                      canvas for a symphony of ingredients. A luscious layer of
                      tomato sauce, rich in flavor, serves as the foundation,
                      complemented by melted mozzarella cheese that blankets the
                      surface with gooey goodness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-light text-center">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12 my-4  ">
                    <p className="paragraph fw-bolder">
                      Pasta, a culinary marvel with roots deeply embedded in
                      Italian cuisine, has become a global sensation,
                      captivating palates across continents. Crafted from durum
                      wheat or alternative grains, pasta takes on various shapes
                      and sizes, from delicate strands of spaghetti to
                      comforting twists of fusilli. The al dente texture,
                      achieved through careful cooking, is the hallmark of
                      well-prepared pasta. The canvas for a myriad of sauces,
                      pasta dishes showcase an extraordinary range of flavors
                      and ingredients. A classic marinara sauce, simmered to
                      perfection with tomatoes, garlic, and herbs, drapes the
                      pasta in a rich, savory embrace. Creamy Alfredo or vibrant
                      pesto sauces offer alternative symphonies of taste, each
                      with its unique appeal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-10 my-4">
                    <video
                      className=""
                      data-aos="fade-out"
                      src="/Images/video (2160p).mp4"
                      autoPlay
                      muted
                      width="120%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container bg-light text-center">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row ms-auto">
                  <div className="col-12 my-4" data-aos="fade-out">
                    <video
                      src="/Images/production_id_4731139 (2160p).mp4"
                      autoPlay
                      muted
                      width="100%"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12 my-4 p-3  ">
                    <p className="paragraph fw-bolder">
                      Burgers, the quintessential symbol of fast-food culture,
                      have evolved into a global culinary phenomenon.
                      Originating in the United States, these handheld delights
                      have transcended their humble beginnings to become a
                      canvas for culinary creativity around the world. At the
                      heart of a burger is the patty, typically made from ground
                      beef, though alternatives like chicken, turkey, or
                      plant-based options have gained popularity. The patty is
                      grilled to perfection, achieving a balance between
                      succulence and a charred exterior. Nestled within a soft,
                      toasted bun, the patty becomes the centerpiece for a
                      symphony of flavors and textures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h1 className="fs-1 text-center">More Items And Deals</h1>
        </>
      )}

      <div className="container">
        <div className="row">
          {Lists.filter((item) => {
            return item.name.toLowerCase().includes(list);
          })
          .map((ele) => {
            return (
              <div className="products2 col-lg-3 col-md-6 col-sm-12">
                <div className="mx-auto" style={{ width: "18rem" }}>
                  <img
                    src={ele.photo}
                    className="img2 mt-3 "
                    style={{
                      width: "18rem",
                      height: "15rem",
                      objectFit: "contain !important",
                    }}
                  ></img>
                  <div className="card-body ">
                    <em className="fw-bold fs-3 5">{ele.name.slice(0, 20)}</em>
                  </div>
                  <div className="Container  fs-5 ">
                    <div className="fw-bold fs-3">RS: {ele.price}</div>
                    <button
                      onClick={() => sendItem(ele)}
                      className="btn1 mt-3 "
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
