<template>
  <nav class="bg-background border-purple">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <router-link to="https/" class="flex items-center space-x-3">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6" alt="CryptoBoard Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-pry">CryptoBoard</span>
      </router-link>

      <!-- Search -->
      <div class="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
          class="md:hidden text-pry hover:text-sec focus:outline-none focus:ring-0 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>

        <!-- Temporary Link -->
        <div class="relative hidden md:block">
          <div class="text-pry">
            <router-link to="/">Temporary Link</router-link>
          </div>
        </div>

        <!-- Hamburger -->
        <button data-collapse-toggle="navbar-search" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sec rounded-lg md:hidden focus:outline-none focus:ring-0"
          aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <!-- Links -->
      <div class="items-center text-sec justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">

        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 ">

          <!-- Cryptocurrencies  -->
          <li>
            <router-link href="/" class="block py-2  px-3 text-white bg-accent rounded md:bg-transparent"
              aria-current="page">Cryptocurrencies</router-link>
          </li>

          <!-- Favorites  -->
          <li>
            <router-link to="/" class="block py-2 px-3 text-white bg-accent rounded md:bg-transparent"
              aria-current="page">Favorites</router-link>
          </li>

          <!-- Crypto News  -->
          <li>
            <router-link to="/" class="block py-2 px-3 text-white bg-accent rounded md:bg-transparent"
              aria-current="page">Crypto News</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>