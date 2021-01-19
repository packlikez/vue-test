<template>
  <div class="root">
    <div class="step-wrapper">
      <div class="step-list">
        <div v-for="(step, index) in steps" :key="step.text" class="step-item">
          <div class="step-indicator">
            <div class="radio" v-bind:class="{ active: step.isActive }">
              <div
                  class="radio-inner"
                  v-bind:class="{ active: step.isActive }"
              />
            </div>
            <DotProgress
                v-show="steps.length - 1 !== index"
                :isActive="step.isProcess"
            />
          </div>
          <span class="radio-text">{{ step.text }}</span>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import DotProgress from "@/features/process/DotProgress";

// const RadioInner = styled("div", RadioProps)`
//   height: 8px;
//   width: 8px;
//   box-sizing: border-box;
//   background-color: ${(props) => (props.isActive ? "#334BFF" : "white")};
//   border-radius: 50%;
// `;
// const RadioText = styled.span`
//   font-size: 12px;
// `;

const steps = [
  {
    text: "System update",
    isActive: true,
    isProcess: true,
  },
  {
    text: "System requirement",
    isActive: false,
    isProcess: false,
  },
  {
    text: "Software license",
    isActive: false,
    isProcess: false,
  },
  {
    text: "Configuration",
    isActive: false,
    isProcess: false,
  },
  {
    text: "Location",
    isActive: false,
    isProcess: false,
  },
  {
    text: "Installation",
    isActive: false,
    isProcess: false,
  },
];

export default {
  name: "Process",
  data: () => ({steps}),
  components: {
    DotProgress,
  },
};
</script>

<style lang="scss" module>
$blue: #334bff;

.root {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
}

.step-wrapper {
  padding: 80px 32px 0px 40px;
  background-color: #ebebeb;
}

.step-list {
}

.step-item {
  display: flex;
  justify-content: flex-start;
  column-gap: 8px;
  text-align: left;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #bbb;
  border-radius: 50%;

  &.active {
    border-color: $blue;
  }
}

.radio-inner {
  height: 8px;
  width: 8px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 50%;

  &.active {
    background-color: $blue;
  }
}

.radio-text {
  font-size: 12px;
}
</style>
