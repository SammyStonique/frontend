<template>
  <div class="about grid place-items-center h-screen">
    <div class="container border-8 border-teal-600 m-auto w-1/2">
      <div class="rounded p-5">
        <h3 class="text-teal-600 mb-1 font-bold">Question 1 of 3</h3>
        <hr class="border-1 border-gray-500" />
        <p class="text-xl mt-5 mb-5">How to write an IF statement in JavaScript?</p>
        <button
          class="w-full h-10 mb-2 pl-4 rounded text-left"
          :class="`bg-${btnColor1}-${fontWeight1}`"
          @click="incorrectAnswer1()"
        >
          if i==5 then
        </button>
        <button
          class="w-full h-10 mb-2 pl-4 rounded text-left"
          :class="`bg-${btnColor2}-${fontWeight2}`"
          @click="correctAnswer()"
        >
          if(i==5)
        </button>
        <button
          class="w-full h-10 mb-2 pl-4 rounded text-left"
          :class="`bg-${btnColor3}-${fontWeight3}`"
          @click="incorrectAnswer3()"
        >
          if i=5
        </button>
        <button
          class="w-full h-10 mb-4 pl-4 rounded text-left"
          :class="`bg-${btnColor4}-${fontWeight4}`"
          @click="incorrectAnswer4()"
        >
          if i=5 then
        </button>
        <button class="bg-teal-600 rounded pl-4 pr-4 pt-1 pb-1 text-white mb-2">
          Next
        </button>
        <div class="flex flex-row">
          <button
            class="rounded-full w-10 h-10 mr-2"
            :class="`bg-${btnColor5}-${fontWeight5}`"
          >
            <i :class="`fa fa-${checkIcon}`" aria-hidden="true"></i>
            <i :class="`fa fa-${timesIcon}`" aria-hidden="true"></i>
          </button>
          <button class="rounded-full bg-gray-300 w-10 h-10 mr-2"></button>
          <button class="rounded-full bg-gray-300 w-10 h-10 mr-2"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkIcon: "",
      timesIcon: "",
      btnColor1: "gray",
      btnColor2: "gray",
      btnColor3: "gray",
      btnColor4: "gray",
      btnColor5: "gray",
      fontWeight1: 300,
      fontWeight2: 300,
      fontWeight3: 300,
      fontWeight4: 300,
      fontWeight5: 300,
    };
  },
  methods: {
    correctAnswer() {
      this.checkIcon = "check";
      this.timesIcon = "";
      this.btnColor2 = "green";
      this.btnColor5 = "green";
      this.fontWeight2 = 600;
      this.fontWeight5 = 600;
      this.btnColor1 = "gray";
      this.btnColor3 = "gray";
      this.btnColor4 = "gray";
    },
    incorrectAnswer1() {
      this.timesIcon = "times";
      this.checkIcon = "";
      this.btnColor1 = "blue";
      this.fontWeight1 = 600;
      this.btnColor5 = "blue";
      this.fontWeight5 = 600;
      this.btnColor2 = "gray";
      this.btnColor3 = "gray";
      this.btnColor4 = "gray";
    },
    incorrectAnswer3() {
      this.timesIcon = "times";
      this.checkIcon = "";
      this.btnColor3 = "blue";
      this.fontWeight3 = 600;
      this.btnColor5 = "blue";
      this.fontWeight5 = 600;
      this.btnColor2 = "gray";
      this.btnColor1 = "gray";
      this.btnColor4 = "gray";
    },
    incorrectAnswer4() {
      this.timesIcon = "times";
      this.checkIcon = "";
      this.btnColor4 = "blue";
      this.fontWeight4 = 600;
      this.btnColor5 = "blue";
      this.fontWeight5 = 600;
      this.btnColor2 = "gray";
      this.btnColor3 = "gray";
      this.btnColor1 = "gray";
    },
  },
};
</script>

<style></style>
