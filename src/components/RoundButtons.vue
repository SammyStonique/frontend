<template>
  <div class="flex flex-row">
    <button class="rounded-full w-10 h-10 mr-2" :class="`bg-${btnC1}-${fontW1}`">
      <i :class="`fa fa-${checkIcon1}`" aria-hidden="true"></i>
    </button>
    <button class="rounded-full w-10 h-10 mr-2" :class="`bg-${btnC2}-${fontW2}`">
      <i :class="`fa fa-${checkIcon2}`" aria-hidden="true"></i>
    </button>
    <button class="rounded-full w-10 h-10 mr-2" :class="`bg-${btnC3}-${fontW3}`">
      <i :class="`fa fa-${checkIcon3}`" aria-hidden="true"></i>
    </button>
    <button class="rounded-full w-10 h-10 mr-2" :class="`bg-${btnC4}-${fontW4}`">
      <i :class="`fa fa-${checkIcon4}`" aria-hidden="true"></i>
    </button>
    <button class="rounded-full w-10 h-10 mr-2" :class="`bg-${btnC5}-${fontW5}`">
      <i :class="`fa fa-${checkIcon5}`" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: [
    "btnC1",
    "btnC2",
    "btnC3",
    "btnC4",
    "btnC5",
    "fontW1",
    "fontW2",
    "fontW3",
    "fontW4",
    "fontW5",
    "checkIcon1",
    "checkIcon2",
    "checkIcon3",
    "checkIcon4",
    "checkIcon5",
  ],
  data() {
    return {};
  },
};
</script>

<style></style>
