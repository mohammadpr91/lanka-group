<template>
  <div>
    <!-- <div
      class="image-container page-header"
      style="background-image: url('img/under_construction.webp'); background-size: 100% 100%;"
    ></div> -->
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/lgc_main_pic.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h2 class="title text-warning">LANKA GROUP OF COMPANIES</h2>
          <h3 class="title">A PARTNER YOU CAN TRUST</h3>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto text-center">
            <h2 class="title">Companies</h2>
            <div class="card margin-right-desktop" style="width:20rem;">
              <div class="card-body">
                <h4 class="card-title text-warning font-weight-600">Lanka Petroleum</h4>
                <p class="card-text text-center font-weight-500">Lanka Petroleum grows prosperity by advancing trade.
                  We move physical commodities from where they are plentiful to where
                  they are most needed – reliably, efficiently and responsibly...
                </p>
              </div> 
            </div>
            <div class="card" style="width:20rem;">
              <div class="card-body">
                <h4 class="card-title text-warning font-weight-600">Lanka Technology</h4>
                <p class="card-text text-center font-weight-500">Lanka Technology grows prosperity by advancing technology.
                  We move physical and mentally commodities from where they are plentiful to where
                  they are most needed – reliably, efficiently and responsibly...
                </p>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h4 class="description text-align-justify">
              The LANKA GROUP is an independent, privately-held holding company,
              established since 2018 and headquartered in Sri Lanka,
              the Group has a global presence with  a strong Asian Footprint.
              <br><br>
              The Group comprises various major businesses with different business entities.
              Our clients benefits from our meticulous global network for Sourcing, Shipping and Trading.
              <br><br>
              At its core, Lanka Petroleum PVT LTD is the bedrock of the LANKA GROUP as a commodity trading
              company engaged in the trading of petrochemicals and petroleum products.
              <br><br>
              Ultimately, the Group is about Partners not Products; and we actively engage businesses globally in
              growing partnerships before products to create and seek new strategic investment opportunities in
              the petrochemicals and petroleum industry.
            </h4>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto text-center">
            <h2 class="title">Our Expertise</h2>
            <h4 class="description text-align-justify">
              At LANKA we analyze all parts of the product lifecycle in order to drive efficiency and mutual benefit,
              bringing investors and new partners together to create original solutions.
              We work within a frame but our eyes are always on the big picture.
            </h4>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team</h2>
        <div class="team">
          <div class="row">
             <div class="col-md-4">
              <div class="team-player margin-bottom-mobile-60">
                <img
                  src="img/shahab_mirzaei.jpeg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Shahab Mirzaei</h4>
                <p class="category text-primary">General Manager</p>
                <p class="description">
                  Board Member
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player margin-bottom-mobile-60">
                <img
                  src="img/parisa_nouri.png"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Parisa Nouri</h4>
                <p class="category text-primary">Marketing Manager</p>
                <p class="description">
                  Board Member
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player margin-bottom-mobile-60">
                <img
                  src="img/ahmadreza_mohammadi.jpeg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">AhmadReza Mohammadi</h4>
                <p class="category text-primary">Commercial Manager</p>
                <p class="description">
                 Board Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput, Card } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Card.name]: Card
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
