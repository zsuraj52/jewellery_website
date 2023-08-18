import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <>
      <div className="">

        <footer className="text-white text-center text-lg-start bg-dark">
          <div className="p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>

                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                </p>

                <div className="mt-4 container">
                  <a href=' '><i className="me-5 fonts text-white fab fa-facebook-f"></i></a>
                  <a href=' '><i className="me-5 fonts text-white fab fa-instagram"></i></a>
                  <a href=' '><i className="me-5 fonts text-white fab fa-whatsapp"></i></a>
                  <a href=' '><i className="me-5 fonts text-white fab fa-twitter"></i></a>
                  <a href=' '><i className="me-5 fonts text-white fab fa-google"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder='search anything'/>
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">1343 Shivajinagar, opp Jain Mandir, Pune </span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 020-1234 5678</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0 bg-dark">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Monday - Friday:</td>
                      <td>9am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Saturday - Sunday:</td>
                      <td>10am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 Copyright:
            <a className="text-white" href="https://react.dev/">Chanel Golden Jewellery</a>
          </div>
        </footer>

      </div>
    </>
  )
}
