import React from 'react';
import './Footer.css'; // Assuming you'll style the footer in Footer.css
import swiggy from '/swiggy-1613371-1369418 (1).webp' 
function Footer() {
  return (

    <div class="footer">
  <div class="container">
      <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="footer-end">

  <ul>
      <li><h4><img src={swiggy} alt=""/>Swiggy</h4></li>
      <li>© 2024 Bundl</li>
      <li>Technologies Pvt. Ltd</li>
  </ul>

  <ul class="img_and_con_ul_1">
      <li><h5>Company</h5></li>
      <li><a href="">About</a></li>
      <li><a href="">Careers</a></li>
      <li><a href="">Team</a></li>
      <li><a href="">Swiggy One</a></li>
      <li><a href="">Swiggy Instamart</a></li>
      <li><a href="">Swiggy Genie</a></li>
  </ul>

  <ul>
      <li><h5>Contact us</h5></li>
      <li><a href="">Help & Support</a></li>
      <li><a href=""> Partner with us</a></li>
      <li><a href=""> Ride with us</a></li>
      <li>
          <ul>
              <li><h5>Legal</h5></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href=""> Cookie Policy</a></li>
              <li><a href="">  Privacy Policy</a></li>
              <li><a href="">Investor Relations</a></li>
          </ul>
      </li>
  </ul>

  <ul>
      <li><h5>We deliver to:</h5></li>
      <li><a href="">Bangalore</a></li>
      <li><a href="">Gurgaon</a></li>
      <li><a href="">Hyderabad</a></li>
      <li><a href=""> Delhi</a></li>
      <li><a href=""> Mumbai</a></li>
      <li><a href=""> Pune</a></li>
      <li><a href=""> 589 cities</a></li>
      </ul>
</div>
          </div>
      </div>
  </div>
</div>

  );
}

export default Footer;
