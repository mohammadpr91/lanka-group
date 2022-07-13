<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
    </div>
    <div class="section section-team text-left">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-12 ml-auto mr-auto">
            <div class="card card-nav-tabs">
              <div class="card-body">
                <h4 class="card-title">Iran Office: </h4>
                <p class="card-text font-weight-400">
                  <i class="fas fa-map-marker-alt text-primary l-mR5"></i>
                  unit 3, No. 9, Shokoufeh Alley, Sharifi Alley, 
                  West Akhlaghi St., Dolat St., Tehran, Iran.
                </p>
                <h4 class="card-title">Sri Lanka office: </h4>
                <p class="card-text font-weight-400">
                  <i class="fas fa-map-marker-alt text-primary l-mR5"></i>
                  No.85, Cotta Road, Colombo 8, Colombo Sri Lanka.
                </p>
                <h4 class="card-title">Sales Department: </h4>
                <p class="card-text font-weight-400">
                  <i class="fas fa-at text-primary l-mR5"></i>
                  <a
                    class="email-addrecc-contact-us"
                    href="mailto:sales@lankapetroleum.com">sales@lankapetroleum.com</a>
                </p>
                <p class="card-text font-weight-400">
                  <i class="fas fa-at text-primary l-mR5"></i>
                  <a
                    class="email-addrecc-contact-us"
                    href="mailto:sales2@lankapetroleum.com">sales2@lankapetroleum.com</a>
                </p>
                <h4 class="card-title">Procurement Department: </h4>
                <p class="card-text font-weight-400">
                  <i class="fas fa-at text-primary l-mR5"></i>
                  <a
                    class="email-addrecc-contact-us"
                    href="mailto:procurement@lankapetroleum.com">procurement@lankapetroleum.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
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
                <p class="font-weight-400">
                  <i class="fas fa-mobile text-primary"></i>
                  <a href="tel:+989127997621">+98-9127997621</a>
                </p>
                <p class="font-weight-400">
                  <i class="fas fa-mobile text-primary"></i>
                  <a href="tel:+989203184297">+98-9203184297</a>
                </p>
                <p class="font-weight-400">
                  <i class="fas fa-at text-primary"></i>
                  <a
                    class="email-addrecc-contact-us"
                    href="mailto:shahab.mirzaei@lankapetroleum.com"
                  > shahab.mirzaei@lankapetroleum.com</a>
                </p>
                 <a
                  href="https://www.linkedin.com/in/shahab-mirzaei-862735183"
                  class="btn btn-primary btn-icon btn-round"
                  target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
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
                <p class="font-weight-400">
                  <i class="fas fa-mobile text-primary"></i>
                  <a href="tel:+989124051589">+98-9124051589</a>
                </p>
                <p class="font-weight-400">
                  <i class="fas fa-mobile text-primary"></i>
                  <a href="tel:+989393835889">+98-9393835889</a>
                </p>
                <p class="font-weight-400">
                  <i class="fas fa-at text-primary"></i>
                  <a
                    class="email-addrecc-contact-us"
                    href="mailto:parisa.nouri@lankapetroleum.com"
                  > parisa.nouri@lankapetroleum.com</a>
                </p>
                <a
                  href="https://www.linkedin.com/in/parisa-nouri"
                  class="btn btn-primary btn-icon btn-round"
                  target="_blank"
                ><i class="fab fa-linkedin"></i
                ></a>
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
                <p class="font-weight-400">
                  <i class="fas fa-mobile text-primary"></i>
                  <a href="tel:+989123402945">+98-9123402945</a>
                </p>
                <p class="font-weight-400">
                  <i class="fas fa-mobile text-primary"></i>
                  <a href="tel:+989109919804">+98-9109919804</a>
                </p>
                <p class="font-weight-400">
                  <i class="fas fa-at text-primary"></i>
                  <a
                    class="email-addrecc-contact-us"
                    href="mailto:ahmad.mohammadi@lankapetroleum.com"
                  > ahmad.mohammadi@lankapetroleum.com</a>
                </p>
                <a
                href="https://www.linkedin.com/in/ahmadreza-mohammadi-8b3574149"
                class="btn btn-primary btn-icon btn-round"
                target="_blank"
                >
                  <i class="fab fa-linkedin">
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
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