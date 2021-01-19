<template>
  <div :class="$style.root">
    <img :class="$style.logo" v-bind:src="logo" />
    <img :class="$style.arrow" v-bind:src="arrow" />
    <img :class="$style.mainLogo"  v-bind:src="mainLogo" />
  </div>
</template>

<script lang="ts">
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";
import mainLogo from "../assets/mainLogo.svg";

export default {
  name: "Home",
  data: () => ({
    logo,
    arrow,
    mainLogo,
  }),
  props: {},
  components: {},
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 36px;
}

.logo {
  align-self: flex-start;
}

.mainLogo {
  align-self: flex-end;
}

.arrow {
  align-self: flex-start;
  margin: 36px 0px;
  margin-left: -36px;
}
</style>
