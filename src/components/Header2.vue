<template>
  <nav class="bg-green-200 px-5 py-2 dark:bg-teal-600">
    <div class="container flex items-center">
      <div class="ml-10 w-60">
        <a class="text-2xl">Brand</a>
      </div>
      <div class="flex-initial w-50 pl-10">
        <router-link to="/" class="mr-10 text-blue-800">Home</router-link>
        <router-link to="/about" class="mr-10 text-yellow-500">Quiz App</router-link>
        <router-link to="/music-player" class="mr-10 text-red-600"
          >Music Player</router-link
        >
        <router-link to="/contacts" class="mr-10 text-red-600">Contacts</router-link>
        <router-link to="/pricing" class="mr-10 text-fuchsia-900">Pricing</router-link>
      </div>
      <div class="flex-initial w-30 ml-5 pl-10">
        <router-link to="/login"
          ><button class="mr-10 bg-blue-500 p-1 pl-5 pr-5 rounded">
            Signin
          </button></router-link
        >
        <router-link to="/register"
          ><button class="bg-green-500 p-1 pl-5 pr-5 rounded">
            Register
          </button></router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
