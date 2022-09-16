<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container margin-auto text-align-center">
      <nav>
        <ul>
          <li class="nav-item">
            <router-link
              v-popover:popover1
              rel="tooltip"
              title="Contact Us"
              data-placement="bottom"
              class="nav-link"
              to="/contactUs"
            >
              <i class="fas fa-address-book"></i>
              <!-- <p class="d-lg-none d-xl-none">Contact Us</p> -->
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="tooltip"
              title="Follow us on LinkedIn"
              data-placement="bottom"
              href="https://www.linkedin.com/company/lanka-petroleum/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
              <!-- <p class="d-lg-none d-xl-none">LinkedIn</p> -->
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="tooltip"
              title="Follow us on Facebook"
              data-placement="bottom"
              href="https://www.facebook.com/Lankapetroleum"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
              <!-- <p class="d-lg-none d-xl-none">Facebook</p> -->
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="tooltip"
              title="Follow us on Instagram"
              data-placement="bottom"
              href="https://instagram.com/lanka_petroleum?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
              <!-- <p class="d-lg-none d-xl-none">Instagram</p> -->
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }},
        <span>Coded by</span>
        <a rel="noopener">Lanka Technology</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>