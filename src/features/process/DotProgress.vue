<template>
  <div class="root">
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
    <div class="dot" v-bind:class="{ active: isActice }" />
  </div>
</template>

<script lang="ts">
// const rotate = keyframes`
//   from {
//     background-color: blue;
//   }
//   to {
//     background-color: lightgrey;
//   }
// `;
//
// const Dot = styled("div", { isActive: Boolean })`
//   display: inline-block;
//   height: 2px;
//   width: 2px;
//   ${(props) => props.isActive && `animation: ${rotate} 1s linear infinite;`};
//   background-color: #bbb;
//   border-radius: 50%;
// `;

// const Container = styled.div``;

export default {
  name: "DotProgress",
  props: { isActive: Boolean },
  components: {
  },
};
</script>

<style lang="scss" module>
$blue: #334bff;

.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  row-gap: 1px;
  padding: 1px 0;

  & .dot:nth-child(1) {
    animation-delay: 0.1s;
  }

   &.dot:nth-child(2) {
    animation-delay: 0.2s;
  }

   &.dot:nth-child(3) {
    animation-delay: 0.3s;
  }

   &.dot:nth-child(4) {
    animation-delay: 0.4s;
  }

   &.dot:nth-child(5) {
    animation-delay: 0.5s;
  }

   &.dot:nth-child(6) {
    animation-delay: 0.6s;
  }

   &.dot:nth-child(7) {
    animation-delay: 0.7s;
  }

   &.dot:nth-child(8) {
    animation-delay: 0.8s;
  }

   &.dot:nth-child(9) {
    animation-delay: 0.9s;
  }

   &.dot:nth-child(10) {
    animation-delay: 1s;
  }
}

.dot {
  display: inline-block;
  height: 2px;
  width: 2px;
  background-color: #bbb;
  border-radius: 50%;

  &.active {
    background-color: $blue;
  }
}
</style>
