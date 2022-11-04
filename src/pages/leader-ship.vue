<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/leader-ship.jpg')"
      >
      </parallax>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h3 class="title">Here is our team</h3>
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
                <p class="category text-primary">Executive Chairman</p>
                <p class="description">Chief Executive Officer</p>
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
                <p class="category text-primary">Executive Director</p>
                <p class="description">Co-Head of Oil Trading</p>
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
                <p class="category text-primary">Executive Director</p>
                <p class="description">Chief Operating Officer</p>
              </div>
            </div>
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