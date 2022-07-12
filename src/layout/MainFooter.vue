<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/contactUs">
              Contact Us
            </a>
            <!-- <router-link v-popover:popover1 class="navbar-brand" to="/contactUs">
                 Contact Us
            </router-link> -->
            <!-- <a href="https://www.creative-tim.com">
            </a> -->
          </li>
          <!-- <li>
            <a href="https:///presentation.creative-tim.com">
              About Us
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Blog
            </a>
          </li> -->
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }},
        <!-- <a href="https:///www.invisionapp.com" target="_blank" rel="noopener"
          >Invision</a
        > -->
        Coded by
        <a rel="noopener"
          >Lanka Technology</a
        >.
        <!-- <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
          >Creative Tim</a
        >. -->
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
