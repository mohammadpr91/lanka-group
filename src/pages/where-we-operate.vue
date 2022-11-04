<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image bg-auto-image"
        style="background-image: url('img/where-we-operate.png')"
      >
      </parallax>
    </div>
    <div class="section section-team text-left">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto text-center">
            <h3 class="title">What We Operate ?</h3>
            <h5 class="description text-align-justify">
              We manage our business across 21 operating countries, and three
              geographic regions; Middle East, Southeast Asia and Africa.
              <br /><br />
              We are a global company with operational locations specifically
              chosen to enable close customer working. We constantly invest in
              existing markets and expand into new ones to provides our
              customers with the most focused and responsive service.
              <br /><br />
              Please choose a country to zoom-in and click on the dots to see
              site contact details and see where we operate!
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