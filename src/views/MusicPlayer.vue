<template>
  <div class="music-player grid place-items-center h-screen">
    <div class="bg-green-300 border border-slate-800 m-auto w-1/2 p-10">
      <h3 class="text-xs font-400 text-center mb-3">
        PLAYING {{ index + 1 }} OF {{ song.length }}
      </h3>
      <div class="border-2 rounded-3xl bg-black m-auto w-40 mb-4">
        <img class="-z-10 rounded-3xl h-40" src="@/assets/main-h.jpeg" alt="Headphones" />
      </div>
      <h2 class="text-2xl text-center">{{ song[index].title }}</h2>
      <h3 class="font-700 text-center">{{ song[index].artist }}</h3>
      <div class="flex flex-row justify-center m-auto w-1/2 mt-5">
        <div class="basis-1/3 m-auto h-1/2 text-center">
          <button class="" @click="prevMusic()">
            <i class="fa fa-step-backward text-2xl" aria-hidden="true"></i>
          </button>
        </div>
        <div class="basis-1/3 text-center">
          <button @click="playMusic()" v-if="!isPlaying">
            <i class="fa fa-play-circle text-6xl" aria-hidden="true"></i>
          </button>
          <button @click="pauseMusic()" v-else>
            <i class="fa fa-pause-circle text-6xl" aria-hidden="true"></i>
          </button>
        </div>
        <div class="basis-1/3 m-auto h-1/2 text-center">
          <button class="" @click="nextMusic()">
            <i class="fa fa-step-forward text-2xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="mt-5 justify-center flex">
        <button @click="mute()">
          <i class="fa fa-volume-off" aria-hidden="true"></i>
        </button>
        <p class="mx-2">Mute</p>
        <button @click="unmute()">
          <i class="fa fa-volume-up" aria-hidden="true"></i>
        </button>
      </div>
      <div class="bg-gray-200 p-5"></div>
      <!-- <div class="m-auto w-1/2">
        <av-line
          class="mt-5"
          :line-width="2"
          line-color="lime"
          :audio-src="`${musicSrc}`"
          @play="playMusic"
        ></av-line>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicPlayer: new Audio(),
      musicSrc: require("@/assets/audio1.mp3"),
      isPlaying: false,
      index: 0,
      song: [
        {
          title: "In the Stars",
          artist: "Benson Boone",
          src: require("@/assets/audio1.mp3"),
        },
        {
          title: "Over Now",
          artist: "Post Malone",
          src: require("@/assets/audio2.mp3"),
        },
      ],
    };
  },
  created() {
    this.isPlaying = true;
    this.musicPlayer.src = this.song[this.index].src;
    console.log("music src is ", this.musicPlayer.src);
    // this.musicPlayer.play();
  },
  methods: {
    playMusic() {
      this.isPlaying = true;
      this.musicPlayer.play();
      console.log("Music should be playing");
    },
    pauseMusic() {
      this.isPlaying = false;
      this.musicPlayer.pause();
      console.log("Music should stop");
    },
    nextMusic() {
      this.index += 1;
      this.isPlaying = true;
      this.musicPlayer.src = this.song[this.index].src;
      this.musicPlayer.play();
    },
    prevMusic() {
      this.index -= 1;
      this.isPlaying = true;
      this.musicPlayer.src = this.song[this.index].src;
      this.musicPlayer.play();
    },
    unmute() {
      this.musicPlayer.muted = false;
    },
    mute() {
      this.musicPlayer.muted = true;
    },
  },
};
</script>

<style></style>
