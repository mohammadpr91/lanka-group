<template>
  <navbar
    position="fixed"
    type="warning"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <!-- <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Now Ui Kit
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover>
    </template> -->
    <!-- class="image-container page-header" -->
    <router-link v-popover:popover1 class="navbar-brand" to="/">
      <img class="navbar-menu-logo-header" src="img/PNG LANKA COLOR.png" />
    </router-link>
    <template slot="navbar-menu">
      <!-- <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93"></i>
          <p>Download</p>
        </a>
      </li> -->

      <drop-down tag="li" title="About Us" class="nav-item">
        <!-- icon="now-ui-icons design_image" -->
        <nav-link to="/what-we-do"> <i class=""></i> What We Do </nav-link>
        <nav-link to="/where-we-operate">
          <i class=""></i> Where We Operate
        </nav-link>
        <nav-link to="/leader-ship"> <i class=""></i> Leadership </nav-link>
        <nav-link to="/trading-oprations">
          <i class=""></i> Trading Operations
        </nav-link>
      </drop-down>

      <drop-down tag="li" title="Products and Services" class="nav-item">
        <!-- icon="now-ui-icons design_image" -->
        <nav-link to="/oil-products">
          <i class=""></i> Oil and Petroleum Products
        </nav-link>
      </drop-down>
      <drop-down tag="li" title="Media" class="nav-item">
        <!-- icon="now-ui-icons design_image" -->
        <nav-link to="/products"> <i class=""></i> Cragoes </nav-link>
        <nav-link to="/products"> <i class=""></i> News </nav-link>
      </drop-down>
      <li class="nav-item">
        <router-link
          v-popover:popover1
          rel="tooltip"
          title="Contact Us"
          data-placement="bottom"
          class="nav-link"
          to="/contactUs"
        >
          Contact Us
        </router-link>
      </li>

      <!-- <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>Upgrade to PRO</p>
        </a>
      </li> -->
      <!-- <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li> -->
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped></style>