<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/what-we-do-4.jpg')"
      >
      </parallax>
    </div>
    <div class="section section-team text-left">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto text-center">
            <h3 class="title">What We Do ?</h3>
            <h5 class="description text-align-justify">
              The LANKA GROUP is an independent, privately-held holding company,
              established since 2018 and headquartered in Sri Lanka, the Group
              has a global presence with a strong Asian Footprint. The Group
              comprises various major businesses with different business
              entities.
              <br /><br />
              At its core, LANKA PETROLEUM PVT LTD is a commodity trading
              company engaged in the trading of petrochemicals and petroleum
              products. Ultimately, the Group is about Partners Not Products;
              and we actively engage businesses globally in growing partnerships
              before products to create and seek new strategic investment
              opportunities in the petrochemicals and petroleum industry.
              <br /><br />
              At LANKA we analyze all parts of the product lifecycle in order to
              drive efficiency and mutual benefit, bringing investors and new
              partners together to create original solutions. We work within a
              frame but our eyes are always on the big picture.
              <br /><br />
              We work with Partners to support and supply global energy flows,
              moving energy responsibly, safely and cost effectively around the
              world. Our experts have an unparalleled global supply network
              assuring smooth and cost-effective deliveries. These enable us to
              gain deeper insights into our customers, and improve how we
              deliver products and services to our customers.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Card.name]: Card,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style></style>