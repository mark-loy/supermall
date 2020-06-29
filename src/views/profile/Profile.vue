<template>
  <div class="profile">
    <nav-bar class="navbar">
      <div slot="center">SuperMall</div>
    </nav-bar>
    <profile-info/>
    <profile-message/>
  </div>

</template>

<script>


  import NavBar from "components/common/navbar/NavBar";

  import ProfileInfo from "./childModule/ProfileInfo";
  import ProfileMessage from "./childModule/ProfileMessage";

  export default {
    name: "Profile",
    components: {
      ProfileMessage,
      ProfileInfo,
      NavBar
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: bold;
  }
</style>
