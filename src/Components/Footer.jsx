import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="footer-area" id="contact">
        <div class="container-header">
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">
                <a href="#">
                  <img src="./icons/logo-1.png" alt="proone" />
                </a>
              </div>
              <div class="footer-menu ">
                <ul>
                  <li class="li">
                    <a href="/">HOME</a>
                  </li>

                  <li class="li">
                    <a href="#product">PRODUCT</a>
                  </li>

                  <li class="li">
                    <a href="/contact">CONTACT</a>
                  </li>
                </ul>
              </div>
              <div class="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i
                        class="fa-brands fa-facebook fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        class="fa-brands fa-twitter fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        class="fa-brands fa-instagram fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        class="fa-brands fa-google-plus-g fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        class="fa-brands fa-linkedin fa-lg"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright pt-18pb-5">
          <div class="container-header">
            <div class="row">
              <div class="col">
                <div class="copy-right">
                  <p>© 2024 ProOne. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
