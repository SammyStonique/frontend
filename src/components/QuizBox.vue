<template>
  <h3 class="text-teal-600 mb-1 font-bold">Question {{ page }} of 5</h3>
  <hr class="border-1 border-gray-500" />
  <p class="text-xl mt-5 mb-5">{{ question }}</p>
  <button
    class="w-full h-10 mb-2 pl-4 rounded text-left"
    :class="`bg-${btnColor1}-${fontWeight1}`"
    @click="checkAnswer1()"
  >
    a. {{ answer1 }}
  </button>
  <button
    class="w-full h-10 mb-2 pl-4 rounded text-left"
    :class="`bg-${btnColor2}-${fontWeight2}`"
    @click="checkAnswer2()"
  >
    b. {{ answer2 }}
  </button>
  <button
    class="w-full h-10 mb-2 pl-4 rounded text-left"
    :class="`bg-${btnColor3}-${fontWeight3}`"
    @click="checkAnswer3()"
  >
    c. {{ answer3 }}
  </button>
  <button
    class="w-full h-10 mb-4 pl-4 rounded text-left"
    :class="`bg-${btnColor4}-${fontWeight4}`"
    @click="checkAnswer4()"
  >
    d. {{ answer4 }}
  </button>
  <button
    class="bg-teal-600 rounded pl-4 pr-4 pt-1 pb-1 text-white mb-2"
    @click="toNextPage()"
  >
    Next
    <i class="fa fa-step-forward text-xs" aria-hidden="true"></i>
  </button>
</template>

<script>
export default {
  props: [
    "page",
    "question",
    "btnColor1",
    "btnColor2",
    "btnColor3",
    "btnColor4",
    "btnColor5",
    "fontWeight1",
    "fontWeight2",
    "fontWeight3",
    "fontWeight4",
    "fontWeight5",
    "answer1",
    "answer2",
    "answer3",
    "answer4",
    "answer5",
    "checkAnswer1",
    "checkAnswer2",
    "checkAnswer3",
    "checkAnswer4",
    "toNextPage",
  ],
};
</script>

<style></style>
