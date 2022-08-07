<template>
  <div class="about grid place-items-center h-screen dark:bg-slate-900 dark:text-white">
    <!-- QUESTION 1 -->
    <div
      class="container border-8 border-teal-600 m-auto w-1/2 dark:bg-slate-700"
      v-if="showDiv1"
    >
      <div class="rounded p-5">
        <QuizBox
          :page="1"
          :question="question1"
          :btnColor1="btnColor1"
          :btnColor2="btnColor2"
          :btnColor3="btnColor3"
          :btnColor4="btnColor4"
          :btnColor5="btnColor5"
          :fontWeight1="fontWeight1"
          :fontWeight2="fontWeight2"
          :fontWeight3="fontWeight3"
          :fontWeight4="fontWeight4"
          :fontWeight5="fontWeight5"
          :answer1="answer1"
          :answer2="answer2"
          :answer3="answer3"
          :answer4="answer4"
          :checkAnswer1="checkAnswer1"
          :checkAnswer2="checkAnswer2"
          :checkAnswer3="checkAnswer3"
          :checkAnswer4="checkAnswer4"
          :toNextPage="toSecondPage"
        />
        <p :class="`text-${errC1}-600 text-sm`" v-for="error in errors" :key="error">
          {{ error }}
        </p>
        <RoundButtons
          :btnC1="btnC1"
          :btnC2="btnC2"
          :btnC3="btnC3"
          :btnC4="btnC4"
          :btnC5="btnC5"
          :fontW1="fontW1"
          :fontW2="fontW2"
          :fontW3="fontW3"
          :fontW4="fontW4"
          :fontW5="fontW5"
          :checkIcon1="checkIcon1"
          :checkIcon2="checkIcon2"
          :checkIcon3="checkIcon3"
          :checkIcon4="checkIcon4"
          :checkIcon5="checkIcon5"
        />
      </div>
    </div>

    <!-- QUESTION 2 -->
    <div class="container border-8 border-teal-600 m-auto w-1/2" v-if="showDiv2">
      <div class="rounded p-5">
        <QuizBox
          :page="2"
          :question="question2"
          :btnColor1="btnColor11"
          :btnColor2="btnColor12"
          :btnColor3="btnColor13"
          :btnColor4="btnColor14"
          :btnColor5="btnColor15"
          :fontWeight1="fontWeight11"
          :fontWeight2="fontWeight12"
          :fontWeight3="fontWeight13"
          :fontWeight4="fontWeight14"
          :fontWeight5="fontWeight15"
          :answer1="answer11"
          :answer2="answer12"
          :answer3="answer13"
          :answer4="answer14"
          :checkAnswer1="checkAnswer11"
          :checkAnswer2="checkAnswer12"
          :checkAnswer3="checkAnswer13"
          :checkAnswer4="checkAnswer14"
          :toNextPage="toThirdPage"
        />
        <p :class="`text-${errC2}-600 text-sm`" v-for="error in errors1" :key="error">
          {{ error }}
        </p>

        <RoundButtons
          :btnC1="btnC1"
          :btnC2="btnC2"
          :btnC3="btnC3"
          :btnC4="btnC4"
          :btnC5="btnC5"
          :fontW1="fontW1"
          :fontW2="fontW2"
          :fontW3="fontW3"
          :fontW4="fontW4"
          :fontW5="fontW5"
          :checkIcon1="checkIcon1"
          :checkIcon2="checkIcon2"
          :checkIcon3="checkIcon3"
          :checkIcon4="checkIcon4"
          :checkIcon5="checkIcon5"
        />
      </div>
    </div>

    <!-- QUESTION 3 -->
    <div class="container border-8 border-teal-600 m-auto w-1/2" v-if="showDiv3">
      <div class="rounded p-5">
        <QuizBox
          :page="3"
          :question="question3"
          :btnColor1="btnColor21"
          :btnColor2="btnColor22"
          :btnColor3="btnColor23"
          :btnColor4="btnColor24"
          :btnColor5="btnColor25"
          :fontWeight1="fontWeight21"
          :fontWeight2="fontWeight22"
          :fontWeight3="fontWeight23"
          :fontWeight4="fontWeight24"
          :fontWeight5="fontWeight25"
          :answer1="answer21"
          :answer2="answer22"
          :answer3="answer23"
          :answer4="answer24"
          :checkAnswer1="checkAnswer21"
          :checkAnswer2="checkAnswer22"
          :checkAnswer3="checkAnswer23"
          :checkAnswer4="checkAnswer24"
          :toNextPage="toFourthPage"
        />
        <p :class="`text-${errC3}-600 text-sm`" v-for="error in errors2" :key="error">
          {{ error }}
        </p>

        <RoundButtons
          :btnC1="btnC1"
          :btnC2="btnC2"
          :btnC3="btnC3"
          :btnC4="btnC4"
          :btnC5="btnC5"
          :fontW1="fontW1"
          :fontW2="fontW2"
          :fontW3="fontW3"
          :fontW4="fontW4"
          :fontW5="fontW5"
          :checkIcon1="checkIcon1"
          :checkIcon2="checkIcon2"
          :checkIcon3="checkIcon3"
          :checkIcon4="checkIcon4"
          :checkIcon5="checkIcon5"
        />
      </div>
    </div>
    <!-- QUESTION 4 -->
    <div class="container border-8 border-teal-600 m-auto w-1/2" v-if="showDiv4">
      <div class="rounded p-5">
        <QuizBox
          :page="4"
          :question="question4"
          :btnColor1="btnColor31"
          :btnColor2="btnColor32"
          :btnColor3="btnColor33"
          :btnColor4="btnColor34"
          :btnColor5="btnColor35"
          :fontWeight1="fontWeight31"
          :fontWeight2="fontWeight32"
          :fontWeight3="fontWeight33"
          :fontWeight4="fontWeight34"
          :fontWeight5="fontWeight35"
          :answer1="answer31"
          :answer2="answer32"
          :answer3="answer33"
          :answer4="answer34"
          :checkAnswer1="checkAnswer31"
          :checkAnswer2="checkAnswer32"
          :checkAnswer3="checkAnswer33"
          :checkAnswer4="checkAnswer34"
          :toNextPage="toFifthPage"
        />
        <p :class="`text-${errC4}-600 text-sm`" v-for="error in errors3" :key="error">
          {{ error }}
        </p>

        <RoundButtons
          :btnC1="btnC1"
          :btnC2="btnC2"
          :btnC3="btnC3"
          :btnC4="btnC4"
          :btnC5="btnC5"
          :fontW1="fontW1"
          :fontW2="fontW2"
          :fontW3="fontW3"
          :fontW4="fontW4"
          :fontW5="fontW5"
          :checkIcon1="checkIcon1"
          :checkIcon2="checkIcon2"
          :checkIcon3="checkIcon3"
          :checkIcon4="checkIcon4"
          :checkIcon5="checkIcon5"
        />
      </div>
    </div>
    <!-- QUESTION 5 -->
    <div class="container border-8 border-teal-600 m-auto w-1/2" v-if="showDiv5">
      <div class="rounded p-5">
        <QuizBox
          :page="5"
          :question="question5"
          :btnColor1="btnColor41"
          :btnColor2="btnColor42"
          :btnColor3="btnColor43"
          :btnColor4="btnColor44"
          :btnColor5="btnColor45"
          :fontWeight1="fontWeight41"
          :fontWeight2="fontWeight42"
          :fontWeight3="fontWeight43"
          :fontWeight4="fontWeight44"
          :fontWeight5="fontWeight45"
          :answer1="answer41"
          :answer2="answer42"
          :answer3="answer43"
          :answer4="answer44"
          :checkAnswer1="checkAnswer41"
          :checkAnswer2="checkAnswer42"
          :checkAnswer3="checkAnswer43"
          :checkAnswer4="checkAnswer44"
          :toNextPage="toResultsPage"
        />
        <p :class="`text-${errC4}-600 text-sm`" v-for="error in errors3" :key="error">
          {{ error }}
        </p>

        <RoundButtons
          :btnC1="btnC1"
          :btnC2="btnC2"
          :btnC3="btnC3"
          :btnC4="btnC4"
          :btnC5="btnC5"
          :fontW1="fontW1"
          :fontW2="fontW2"
          :fontW3="fontW3"
          :fontW4="fontW4"
          :fontW5="fontW5"
          :checkIcon1="checkIcon1"
          :checkIcon2="checkIcon2"
          :checkIcon3="checkIcon3"
          :checkIcon4="checkIcon4"
          :checkIcon5="checkIcon5"
        />
      </div>
    </div>
    <!-- RESULTS DIV -->
    <div class="container border-8 border-teal-600 m-auto w-1/2" v-if="showDiv6">
      <div class="rounded p-5">
        <h3 class="text-teal-600 mb-1 font-bold">Results</h3>
        <hr class="border-1 border-gray-500 mb-8" />
        <table class="border-separate border border-slate-500 w-full">
          <thead class="font-bold text-center text-2xl">
            <tr>
              <th class="border border-slate-600 bg-gray-400">Question</th>
              <th class="border border-slate-600 bg-gray-400">Correct Answer</th>
              <th class="border border-slate-600 bg-gray-400">Score</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr>
              <td class="border border-slate-600 bg-gray-200">1</td>
              <td class="border border-slate-600 bg-gray-200">{{ correctAnswer1 }}</td>
              <td class="border border-slate-600 bg-gray-200">{{ score1 }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 bg-gray-200">2</td>
              <td class="border border-slate-600 bg-gray-200">{{ correctAnswer2 }}</td>
              <td class="border border-slate-600 bg-gray-200">{{ score2 }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 bg-gray-200">3</td>
              <td class="border border-slate-600 bg-gray-200">{{ correctAnswer3 }}</td>
              <td class="border border-slate-600 bg-gray-200">{{ score3 }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 bg-gray-200">4</td>
              <td class="border border-slate-600 bg-gray-200">{{ correctAnswer4 }}</td>
              <td class="border border-slate-600 bg-gray-200">{{ score4 }}</td>
            </tr>
            <tr>
              <td class="border border-slate-600 bg-gray-200">5</td>
              <td class="border border-slate-600 bg-gray-200">{{ correctAnswer5 }}</td>
              <td class="border border-slate-600 bg-gray-200">{{ score5 }}</td>
            </tr>
            <tr>
              <td></td>
              <td class="font-bold text-xl">TOTAL</td>
              <td class="border border-slate-600 font-bold">{{ totalScore }}</td>
            </tr>
          </tbody>
        </table>
        <p class="mt-8 text-center font-medium">
          Thank you for playing the JavaScript Quiz App.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import RoundButtons from "@/components/RoundButtons.vue";
import QuizBox from "@/components/QuizBox.vue";

export default {
  computed: {
    totalScore() {
      let scoreTotal = 0;
      scoreTotal = this.score1 + this.score2 + this.score3 + this.score4 + this.score5;
      return scoreTotal;
    },
  },
  data() {
    return {
      // FIRST PAGE VARIABLES
      showDiv1: true,
      question1: "How to write an IF statement in JavaScript?",
      answer1: "if i==5 then",
      answer2: "if(i==5)",
      answer3: "if i=5",
      answer4: "if i=5 then",
      checkIcon1: "",
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
      fontW1: 300,
      fontW2: 300,
      fontW3: 300,
      fontW4: 300,
      fontW5: 300,
      btnC1: "gray",
      btnC2: "gray",
      btnC3: "gray",
      btnC4: "gray",
      btnC5: "gray",
      errors: [],
      errC1: "",
      correctAnswer1: "NO",
      score1: 0,
      // SECOND PAGE VARIABLES
      showDiv2: false,
      question2: "Inside which HTML element do we put the JavaScript?",
      answer11: "<script>",
      answer12: "<javascript>",
      answer13: "<scripting>",
      answer14: "<js>",
      btnColor11: "gray",
      btnColor12: "gray",
      btnColor13: "gray",
      btnColor14: "gray",
      btnColor15: "gray",
      fontWeight11: 300,
      fontWeight12: 300,
      fontWeight13: 300,
      fontWeight14: 300,
      fontWeight15: 300,
      checkIcon2: "",
      errors1: [],
      errC2: "",
      correctAnswer2: "NO",
      score2: 0,
      // THIRD PAGE VARIABLES
      showDiv3: false,
      question3: "What is the correct way to write a JavaScript array?",
      answer21: "var colors = (1:'red', 2:'green', 3:'blue')",
      answer22: "var colors = ['red', 'green', 'blue']",
      answer23: "var colors = 1 = ('red'), 2 = ('green'), 3 =('blue')",
      answer24: "var colors = 'red', 'green', 'blue'",
      btnColor21: "gray",
      btnColor22: "gray",
      btnColor23: "gray",
      btnColor24: "gray",
      btnColor25: "gray",
      fontWeight21: 300,
      fontWeight22: 300,
      fontWeight23: 300,
      fontWeight24: 300,
      fontWeight25: 300,
      checkIcon3: "",
      errors2: [],
      errC3: "",
      correctAnswer3: "NO",
      score3: 0,
      // FOURTH PAGE VARIABLES
      showDiv4: false,
      question4: "How do you write 'Hello World' in an alert box?",
      answer31: "alertBox('Hello World');",
      answer32: "msg('Hello World');",
      answer33: "alert('Hello World');",
      answer34: "msgBox('Hello World');",
      btnColor31: "gray",
      btnColor32: "gray",
      btnColor33: "gray",
      btnColor34: "gray",
      btnColor35: "gray",
      fontWeight31: 300,
      fontWeight32: 300,
      fontWeight33: 300,
      fontWeight34: 300,
      fontWeight35: 300,
      checkIcon4: "",
      errors3: [],
      errC4: "",
      correctAnswer4: "NO",
      score4: 0,
      // FIFTH PAGE VARIABLES
      showDiv5: false,
      question5: "How do you round the number 7.25, to the nearest integer?",
      answer41: "rnd(7.25)",
      answer42: "Math.round(7.25)",
      answer43: "Math.rnd(7.25)",
      answer44: "round(7.25)",
      btnColor41: "gray",
      btnColor42: "gray",
      btnColor43: "gray",
      btnColor44: "gray",
      btnColor45: "gray",
      fontWeight41: 300,
      fontWeight42: 300,
      fontWeight43: 300,
      fontWeight44: 300,
      fontWeight55: 300,
      checkIcon5: "",
      errors4: [],
      errC5: "",
      correctAnswer5: "NO",
      score5: 0,
      //RESULTS PAGE VARIABLES
      showDiv6: false,
    };
  },
  methods: {
    // QUESTION 1 ANSWERS
    checkAnswer1() {
      this.errors = [];
      this.btnColor1 = "blue";
      this.btnColor2 = "gray";
      this.btnColor3 = "gray";
      this.btnColor4 = "gray";
      this.checkIcon1 = "times";
      this.fontWeight1 = 600;
      this.fontW1 = 600;
      this.btnC1 = "blue";
      this.errors.push("Incorrect. Correct answer is (b) ");
      this.errC1 = "red";
      this.correctAnswer1 = "NO";
      this.score1 = 0;
    },
    checkAnswer2() {
      this.errors = [];
      this.btnColor1 = "gray";
      this.btnColor2 = "green";
      this.btnColor3 = "gray";
      this.btnColor4 = "gray";
      this.checkIcon1 = "check";
      this.fontWeight2 = 600;
      this.fontW1 = 600;
      this.btnC1 = "green";
      this.errors.push("Hooray!!!!");
      this.errC1 = "red";
      this.correctAnswer1 = "YES";
      this.score1 = 1;
    },
    checkAnswer3() {
      this.errors = [];
      this.btnColor1 = "gray";
      this.btnColor2 = "gray";
      this.btnColor3 = "blue";
      this.btnColor4 = "gray";
      this.checkIcon1 = "times";
      this.fontWeight1 = 600;
      this.fontW1 = 600;
      this.btnC1 = "blue";
      this.errors.push("Incorrect. Correct answer is (b) ");
      this.errC1 = "red";
      this.correctAnswer1 = "NO";
      this.score1 = 0;
    },
    checkAnswer4() {
      this.errors = [];
      this.btnColor1 = "gray";
      this.btnColor2 = "gray";
      this.btnColor3 = "gray";
      this.btnColor4 = "blue";
      this.checkIcon1 = "times";
      this.fontWeight1 = 600;
      this.fontW1 = 600;
      this.btnC1 = "blue";
      this.errors.push("Incorrect. Correct answer is (b) ");
      this.errC1 = "red";
      this.correctAnswer1 = "NO";
      this.score1 = 0;
    },
    toSecondPage() {
      this.errors = [];
      if (this.btnC1 == "gray") {
        this.showDiv1 = true;
        this.showDiv2 = false;
        this.errors.push("Make a selection before proceeding to next question!");
        this.errC1 = "red";
      } else {
        this.showDiv1 = false;
        this.showDiv2 = true;
      }
    },

    // QUESTION 2 ANSWERS
    checkAnswer11() {
      this.errors1 = [];
      this.btnColor11 = "green";
      this.btnColor12 = "gray";
      this.btnColor13 = "gray";
      this.btnColor14 = "gray";
      this.checkIcon2 = "check";
      this.fontWeight11 = 600;
      this.fontW2 = 600;
      this.btnC2 = "green";
      this.errors1.push("Hooray!!!!");
      this.errC2 = "green";
      this.correctAnswer2 = "YES";
      this.score2 = 1;
    },
    checkAnswer12() {
      this.errors1 = [];
      this.btnColor11 = "gray";
      this.btnColor12 = "blue";
      this.btnColor13 = "gray";
      this.btnColor14 = "gray";
      this.checkIcon2 = "times";
      this.fontWeight12 = 600;
      this.fontW2 = 600;
      this.btnC2 = "blue";
      this.errors1.push("Incorrect. Correct answer is (a) ");
      this.errC2 = "red";
      this.correctAnswer2 = "NO";
      this.score2 = 0;
    },
    checkAnswer13() {
      this.errors1 = [];
      this.btnColor11 = "gray";
      this.btnColor12 = "gray";
      this.btnColor13 = "blue";
      this.btnColor14 = "gray";
      this.checkIcon2 = "times";
      this.fontWeight13 = 600;
      this.fontW2 = 600;
      this.btnC2 = "blue";
      this.errors1.push("Incorrect. Correct answer is (a) ");
      this.errC2 = "red";
      this.correctAnswer2 = "NO";
      this.score2 = 0;
    },
    checkAnswer14() {
      this.errors1 = [];
      this.btnColor11 = "gray";
      this.btnColor12 = "gray";
      this.btnColor13 = "gray";
      this.btnColor14 = "blue";
      this.checkIcon2 = "times";
      this.fontWeight14 = 600;
      this.fontW2 = 600;
      this.btnC2 = "blue";
      this.errors1.push("Incorrect. Correct answer is (a) ");
      this.errC2 = "red";
      this.correctAnswer2 = "NO";
      this.score2 = 0;
    },
    toThirdPage() {
      this.errors1 = [];
      if (this.btnC2 == "gray") {
        this.showDiv2 = true;
        // this.showDiv1 = false;
        this.errors1.push("Make a selection before proceeding to next question!");
        this.errC2 = "red";
      } else {
        this.showDiv2 = false;
        this.showDiv3 = true;
      }
    },

    // QUESTION 3 ANSWERS
    checkAnswer21() {
      this.errors2 = [];
      this.btnColor21 = "blue";
      this.btnColor22 = "gray";
      this.btnColor23 = "gray";
      this.btnColor24 = "gray";
      this.checkIcon3 = "times";
      this.fontWeight21 = 600;
      this.fontW3 = 600;
      this.btnC3 = "blue";
      this.errors2.push("Incorrect. Correct answer is (b)");
      this.errC3 = "red";
      this.correctAnswer3 = "NO";
      this.score3 = 0;
    },
    checkAnswer22() {
      this.errors2 = [];
      this.btnColor21 = "gray";
      this.btnColor22 = "green";
      this.btnColor23 = "gray";
      this.btnColor24 = "gray";
      this.checkIcon3 = "check";
      this.fontWight22 = 600;
      this.fontW3 = 600;
      this.btnC3 = "green";
      this.errors2.push("Hooray!!!!");
      this.errC3 = "green";
      this.correctAnswer3 = "YES";
      this.score3 = 1;
    },
    checkAnswer23() {
      this.errors2 = [];
      this.btnColor21 = "gray";
      this.btnColor22 = "gray";
      this.btnColor23 = "blue";
      this.btnColor24 = "gray";
      this.checkIcon3 = "times";
      this.fontWeight23 = 600;
      this.fontW3 = 600;
      this.btnC3 = "blue";
      this.errors2.push("Incorrect. Correct answer is (b) ");
      this.errC3 = "red";
      this.correctAnswer3 = "NO";
      this.score3 = 0;
    },
    checkAnswer24() {
      this.errors2 = [];
      this.btnColor21 = "gray";
      this.btnColor22 = "gray";
      this.btnColor23 = "gray";
      this.btnColor24 = "blue";
      this.checkIcon3 = "times";
      this.fontWeight24 = 600;
      this.fontW3 = 600;
      this.btnC3 = "blue";
      this.errors2.push("Incorrect. Correct answer is (b) ");
      this.errC3 = "red";
      this.correctAnswer3 = "NO";
      this.score3 = 0;
    },
    toFourthPage() {
      this.errors1 = [];
      if (this.btnC3 == "gray") {
        this.showDiv3 = true;
        // this.showDiv1 = false;
        this.errors2.push("Make a selection before proceeding to next question!");
        this.errC3 = "red";
      } else {
        this.showDiv3 = false;
        this.showDiv4 = true;
      }
    },

    // QUESTION 4 ANSWERS
    checkAnswer31() {
      this.errors3 = [];
      this.btnColor31 = "blue";
      this.btnColor32 = "gray";
      this.btnColor33 = "gray";
      this.btnColor34 = "gray";
      this.checkIcon4 = "times";
      this.fontWeight31 = 600;
      this.fontW4 = 600;
      this.btnC4 = "blue";
      this.errors3.push("Incorrect. Correct answer is (c)");
      this.errC4 = "red";
      this.correctAnswer4 = "NO";
      this.score4 = 0;
    },
    checkAnswer32() {
      this.errors3 = [];
      this.btnColor31 = "gray";
      this.btnColor32 = "blue";
      this.btnColor33 = "gray";
      this.btnColor34 = "gray";
      this.checkIcon4 = "times";
      this.fontWight32 = 600;
      this.fontW4 = 600;
      this.btnC4 = "blue";
      this.errors3.push("Incorrect. Correct answer is (c)");
      this.errC4 = "blue";
      this.correctAnswer4 = "NO";
      this.score4 = 0;
    },
    checkAnswer33() {
      this.errors3 = [];
      this.btnColor31 = "gray";
      this.btnColor32 = "gray";
      this.btnColor33 = "green";
      this.btnColor34 = "gray";
      this.checkIcon4 = "check";
      this.fontWeight33 = 600;
      this.fontW4 = 600;
      this.btnC4 = "green";
      this.errors3.push("Hooray!!!!");
      this.errC4 = "red";
      this.correctAnswer4 = "YES";
      this.score4 = 1;
    },
    checkAnswer34() {
      this.errors3 = [];
      this.btnColor31 = "gray";
      this.btnColor32 = "gray";
      this.btnColor33 = "gray";
      this.btnColor34 = "blue";
      this.checkIcon4 = "times";
      this.fontWeight34 = 600;
      this.fontW4 = 600;
      this.btnC4 = "blue";
      this.errors3.push("Incorrect. Correct answer is (c) ");
      this.errC4 = "red";
      this.correctAnswer4 = "NO";
      this.score4 = 0;
    },
    toFifthPage() {
      this.errors3 = [];
      if (this.btnC4 == "gray") {
        this.showDiv4 = true;
        // this.showDiv1 = false;
        this.errors3.push("Make a selection before proceeding to next question!");
        this.errC4 = "red";
      } else {
        this.showDiv4 = false;
        this.showDiv5 = true;
      }
    },
    // QUESTION 5 ANSWERS
    checkAnswer41() {
      this.errors4 = [];
      this.btnColor41 = "blue";
      this.btnColor42 = "gray";
      this.btnColor43 = "gray";
      this.btnColor44 = "gray";
      this.checkIcon5 = "times";
      this.fontWeight41 = 600;
      this.fontW5 = 600;
      this.btnC5 = "blue";
      this.errors4.push("Incorrect. Correct answer is (b)");
      this.errC5 = "red";
      this.correctAnswer5 = "NO";
      this.score5 = 0;
    },
    checkAnswer42() {
      this.errors4 = [];
      this.btnColor41 = "gray";
      this.btnColor42 = "green";
      this.btnColor43 = "gray";
      this.btnColor44 = "gray";
      this.checkIcon5 = "check";
      this.fontWight42 = 600;
      this.fontW5 = 600;
      this.btnC5 = "green";
      this.errors4.push("Hooray!!!!");
      this.errC5 = "green";
      this.correctAnswer5 = "YES";
      this.score5 = 1;
    },
    checkAnswer43() {
      this.errors4 = [];
      this.btnColor41 = "gray";
      this.btnColor42 = "gray";
      this.btnColor43 = "blue";
      this.btnColor44 = "gray";
      this.checkIcon5 = "times";
      this.fontWeight43 = 600;
      this.fontW5 = 600;
      this.btnC5 = "blue";
      this.errors4.push("Incorrect. Correct answer is (b) ");
      this.errC5 = "red";
      this.correctAnswer5 = "NO";
      this.score5 = 0;
    },
    checkAnswer44() {
      this.errors4 = [];
      this.btnColor41 = "gray";
      this.btnColor42 = "gray";
      this.btnColor43 = "gray";
      this.btnColor44 = "blue";
      this.checkIcon5 = "times";
      this.fontWeight44 = 600;
      this.fontW5 = 600;
      this.btnC5 = "blue";
      this.errors5.push("Incorrect. Correct answer is (b) ");
      this.errC5 = "red";
      this.correctAnswer5 = "NO";
      this.score5 = 0;
    },
    toResultsPage() {
      this.errors4 = [];
      if (this.btnC5 == "gray") {
        this.showDiv5 = true;
        // this.showDiv1 = false;
        this.errors4.push("Make a selection before proceeding to next question!");
        this.errC5 = "red";
      } else {
        this.showDiv5 = false;
        this.showDiv6 = true;
      }
    },
  },
  components: { RoundButtons, QuizBox },
};
</script>

<style></style>
