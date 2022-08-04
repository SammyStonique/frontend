<template>
  <div class="register bg-rose-400 h-screen w-full">
    <div class="m-auto flex flex-row w-2/3">
      <div class="basis-1/2 mt-20 p-10">
        <h3 class="text-white text-5xl font-bold">Learn to code by watching others</h3>
        <p class="text-white mt-8">
          See how experienced developers solve problems in real time. Watching scripted
          tutorials is great, but understanding how developers think is invaluable.
        </p>
      </div>
      <div class="basis-1/2 mt-10">
        <button class="bg-blue-800 text-white text-sm rounded p-2 mb-3 h-12 w-full">
          <small class="font-bold text-sm">Try it free 7days </small>then $20/month
          thereafter
        </button>
        <div class="bg-white rounded p-10 shadow-xl shadow-black">
          <input
            type="text"
            class="text-sm border-2 rounded p-1 h-10 mb-3 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            class="text-sm border-2 rounded p-1 h-10 mb-3 w-full"
            placeholder="Last Name"
          />
          <input
            type="email"
            class="text-sm border-2 rounded p-1 h-10 mb-3 w-full"
            placeholder="Email"
          />
          <input
            type="password"
            class="text-sm border-2 rounded p-1 h-10 mb-3 w-full"
            placeholder="Password"
          />
          <button
            class="transition ease-in-out delay-150 h-10 rounded w-full bg-green-500 text-white uppercase text-sm font-bold mb-3 hover:translate-y-2 hover:scale-110 duration-300"
            type="submit"
          >
            Claim your free trial
          </button>
          <div class="flex">
            <p class="text-xs text-gray-400">
              By clicking the button, you are agreeing to our
              <router-link to="" class="text-red-400 text-xs"
                >Terms and Services</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
