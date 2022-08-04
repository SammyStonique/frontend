<template>
  <div class="login bg-slate-900 h-screen pt-20">
    <div
      class="container text-center dark:bg-black w-1/2 m-auto bg-red-500 h-fit pb-10 pt-10 shadow-2xl shadow-gray-500"
    >
      <h3 class="text-4xl mb-10">Login</h3>
      <form class="m-auto w-1/2">
        <div class="container text-left">
          <label class="text-xl" for="">Email</label><br />
          <input
            class="transition ease-in-out delay-150 text-lg mb-10 h-8 w-full border-b-2 border-b-amber-500 bg-red-500 focus:bg-white focus:border-b-slate-900 focus:outline-0 focus:-translate-y-1 focus:scale-110 duration-300 shadow-md focus:shadow-gray-500"
            type="email"
          />
        </div>
        <div class="container text-left">
          <label class="text-xl" for="">Password</label><br />
          <input
            class="transition ease-in-out delay-150 text-lg mb-5 h-8 w-full border-b-2 border-b-amber-500 bg-red-500 focus:bg-white focus:border-b-slate-900 focus:outline-0 focus:-translate-y-1 focus:scale-110 duration-300 shadow-md focus:shadow-gray-500"
            type="password"
          />
        </div>
        <div class="container text-left mb-3">
          <small class=""
            >Forgot Password?
            <router-link to="" class="underline hover:text-white">
              Reset</router-link
            ></small
          >
        </div>
        <div class="container text-left">
          <button
            class="transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 rounded-full w-full bg-green-600 h-8 mb-3"
            type="submit"
          >
            Login
          </button>
        </div>
        <div class="container text-left">
          <small
            >Don't have an account?
            <router-link to="" class="underline hover:text-white">
              SIGN UP</router-link
            ></small
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
