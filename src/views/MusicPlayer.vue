<template>
  <div class="music-player grid place-items-center h-screen mt-20 mb-20">
    <div class="bg-green-300 border border-slate-800 m-auto w-1/2 p-10">
      <h3 class="text-xs font-400 text-center mb-3">
        PLAYING {{ songIndex + 1 }} OF {{ songs.length }}
      </h3>
      <div class="border-2 rounded-3xl bg-black m-auto w-40 mb-4">
        <img class="-z-10 rounded-3xl h-40" src="@/assets/main-h.jpeg" alt="Headphones" />
      </div>
      <h2 class="text-2xl text-center">{{ current.title }}</h2>
      <h3 class="font-700 text-center">{{ current.artist }}</h3>
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
      <div class="p-5 text-center">
        <button
          @click="fetchPlaylist"
          class="bg-black text-white rounded m-auto w-1/2 h-8"
        >
          Spotify
        </button>
        <div class="text-center m-auto w-1/2 mt-3" v-if="openSpotifyPlaylist">
          <h5 class="text-center mb-2">Your available Spotify Playlists</h5>
          <button
            class="rounded m-auto w-1/2 h-6 bg-green-500 text-white"
            @click="fetchPlaylistTrack"
          >
            {{ myPlaylist }}
          </button>
          <div v-for="song in trackList" class="text-center">
            <button
              class="h-10 w-full m-auto"
              :class="song.track == current.track ? 'playing-song' : 'song'"
              @click="playSpotifyMusic(song)"
            >
              {{ song.track.name }} - {{ song.track.artists[0].name }}
            </button>
          </div>
        </div>
      </div>
      <div class="text-center pb-2">
        <button
          v-if="!showPl"
          class="bg-black text-white m-auto w-1/2 rounded h-8"
          @click="showPlaylist"
        >
          View PlayList
        </button>
        <button
          v-else
          class="bg-black text-white m-auto w-1/2 rounded h-8"
          @click="hidePlaylist"
        >
          Hide PlayList
        </button>
        <div class="playlist mt-3" v-for="song in songs" :key="index" v-if="showPl">
          <button
            class="h-10 w-4/6 m-auto"
            :class="song.src == current.src ? 'playing-song' : 'song'"
            @click="playSelectedMusic(song)"
          >
            {{ song.title }} - {{ song.artist }}
          </button>
        </div>
      </div>
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
      current: {},
      songIndex: 0,
      index: 0,
      songLength: 0,
      showPl: false,
      songs: [
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
        {
          title: "Certain Things",
          artist: "James Arthur",
          src: require("@/assets/audio3.mp3"),
        },
        {
          title: "Water",
          artist: "Jamie Grey",
          src: require("@/assets/audio4.mp3"),
        },
        {
          title: "If I would have known",
          artist: "Kyle Hume",
          src: require("@/assets/audio5.mp3"),
        },
        {
          title: "Leaving My Love Behind",
          artist: "Lewis Capaldi",
          src: require("@/assets/audio6.mp3"),
        },
        {
          title: "Broken",
          artist: "Jamie Grey",
          src: require("@/assets/audio7.mp3"),
        },
        {
          title: "Repeat Until Death",
          artist: "Novo Amor",
          src: require("@/assets/audio8.mp3"),
        },
        {
          title: "One",
          artist: "Lewis Capaldi",
          src: require("@/assets/audio9.mp3"),
        },
        {
          title: "Falling Again",
          artist: "Harry Styles",
          src: require("@/assets/audio10.mp3"),
        },
        {
          title: "Safe Inside",
          artist: "James Arthur",
          src: require("@/assets/audio11.mp3"),
        },
        {
          title: "Fix You",
          artist: "Coldplay",
          src: require("@/assets/audio12.mp3"),
        },
        {
          title: "Naked",
          artist: "James Arthur",
          src: require("@/assets/audio13.mp3"),
        },
        {
          title: "Falling Like The Stars",
          artist: "James Arthur",
          src: require("@/assets/audio14.mp3"),
        },
        {
          title: "To Build A Home",
          artist: "The Cinematic Orchestra",
          src: require("@/assets/audio15.mp3"),
        },
        {
          title: "Body",
          artist: "Jordan Suaste",
          src: require("@/assets/audio16.mp3"),
        },
        {
          title: "Quite Miss Home",
          artist: "James Arthur",
          src: require("@/assets/audio17.mp3"),
        },
      ],
      clientID: "a1797d9e63ae49928b4c14aff66a412a",
      clientSecret: "7499b9bc0275417389a7875194ece12f",
      redirectURL: "http://localhost:8080/music-player",
      access_token: [],
      user_id: "31tu4cv5etdsb6ppaoymtvb4vt3q",
      playlistId: "5jdItWZgAjo75TzZaBKsVJ?si=603881356f4843c1",
      myPlaylist: "",
      openSpotifyPlaylist: false,
      trackList: [],
    };
  },
  created() {
    this.isPlaying = false;
    this.current = this.songs[this.songIndex];
    this.musicPlayer.src = this.current.src;
    // this.musicPlayer.play();
  },
  methods: {
    playMusic() {
      this.isPlaying = true;
      this.musicPlayer.play();
      this.musicPlayer.addEventListener(
        "ended",
        function () {
          this.songIndex++;
          this.isPlaying = true;
          this.musicPlayer.src = this.songs[this.songIndex].src;
          this.musicPlayer.play();
        }.bind(this)
      );
    },
    playSelectedMusic(song) {
      // let selectedSong = arguments[0];
      if (typeof song.src != "undefined") {
        this.current = song;
        this.musicPlayer.src = this.current.src;
      }
      this.musicPlayer.play();
      this.isPlaying = true;
      this.musicPlayer.addEventListener(
        "ended",
        function () {
          this.songIndex++;
          this.isPlaying = true;
          this.musicPlayer.src = this.songs[this.songIndex].src;
          this.musicPlayer.play();
        }.bind(this)
      );
    },
    playSpotifyMusic(song) {
      // let selectedSong = arguments[0];
      if (typeof song.track.preview_url != "undefined") {
        this.current = song.track;
        console.log("the current song is ", this.current);
        this.musicPlayer.src = this.current.preview_url;
      }
      this.musicPlayer.play();
      console.log("Muziki kasumbua");
      this.isPlaying = true;
      this.musicPlayer.addEventListener(
        "ended",
        function () {
          this.songIndex++;
          this.isPlaying = true;
          this.musicPlayer.src = this.songs[this.songIndex].src;
          this.musicPlayer.play();
        }.bind(this)
      );
    },
    pauseMusic() {
      this.isPlaying = false;
      this.musicPlayer.pause();
      console.log("Music should stop");
    },
    nextMusic() {
      if (this.songIndex == this.songs.length - 1) {
        this.songIndex = 0;
        this.isPlaying = true;
        this.current = this.songs[this.songIndex];
        this.musicPlayer.src = this.current.src;
        this.playSelectedMusic(this.current);
      } else {
        this.songIndex += 1;
        this.isPlaying = true;
        this.current = this.songs[this.songIndex];
        this.musicPlayer.src = this.current.src;
        this.playSelectedMusic(this.current);
      }
    },
    prevMusic() {
      if (this.songIndex > 0) {
        this.songIndex -= 1;
        this.isPlaying = true;
        this.current = this.songs[this.songIndex];
        this.musicPlayer.src = this.current.src;
        this.playSelectedMusic(this.current);
      } else {
        this.songIndex = this.songs.length - 1;
        console.log("the new index is ", this.songIndex);
        this.isPlaying = true;
        this.current = this.songs[this.songIndex];
        this.musicPlayer.src = this.current.src;
        this.playSelectedMusic(this.current);
      }
    },
    unmute() {
      this.musicPlayer.muted = false;
    },
    mute() {
      this.musicPlayer.muted = true;
    },
    showPlaylist() {
      this.showPl = true;
    },
    hidePlaylist() {
      this.showPl = false;
    },
    async fetchPlaylist() {
      this.openSpotifyPlaylist = true;
      let token =
        "BQAT0dR9rY1Q_ph0KORZeDVnP8H_zB-FatdmtsGkmn2bliYltL__i87egA-1YgwegfPU0mzceYzRFBeeRjSiuSzTqV9P4RKZLRpp772j8w8nBW2i3dA";
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      await this.axios
        .get(`https://api.spotify.com/v1/users/${this.user_id}/playlists`, config)
        .then((response) => {
          console.log(response.data.items[0].name);
          this.myPlaylist = response.data.items[0].name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchPlaylistTrack() {
      let token =
        "BQAT0dR9rY1Q_ph0KORZeDVnP8H_zB-FatdmtsGkmn2bliYltL__i87egA-1YgwegfPU0mzceYzRFBeeRjSiuSzTqV9P4RKZLRpp772j8w8nBW2i3dA";
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      await this.axios
        .get(`https://api.spotify.com/v1/playlists/${this.playlistId}/tracks`, config)
        .then((response) => {
          console.log("tracks data is ", response.data.tracks.items[0].track.href);
          this.trackList = response.data.tracks.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async spotifyFetch() {
      let encodedString = window.btoa(this.clientID + ":" + this.clientSecret);
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + encodedString,
        },
        body: "grant_type=client_credentials",
      };
      const result = await fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("The access token is " + data.body["access_token"]);
        });
      // const data = result.json();

      this.access_token.push(data);
      // return data.access_token;
    },
    getToken() {
      this.spotifyFetch();
      console.log("kabisa kaka ", this.access_token);
    },
  },
  mounted() {
    // this.getToken();
    // this.spotifyFetch();
  },
};
</script>

<style scoped>
.playing-song {
  background-color: crimson;
  color: white;
}
.playing-song:hover {
  opacity: 0.7;
}
.song {
  background-color: none;
  outline: none;
  border: none;
  color: crimson;
}
.song:hover {
  color: white;
}
</style>
