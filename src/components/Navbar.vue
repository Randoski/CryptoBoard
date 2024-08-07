<template>
  <nav class="border-b border-border">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <router-link to="https/" class="flex items-center  text-pry space-x-3">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6" alt="CryptoBoard Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-pry">CryptoBoard</span>
      </router-link>

      <!-- Search -->
      <div class="flex md:order-2">

        <!-- Favorites -->
        <div class="relative hidden md:block">
          <!-- <div>
            <router-link to="/"
              class="block py-2 px-3 text-pry text-sm font-semibold bg-accent rounded md:bg-transparent md:font-bold"
              aria-current="page">Favorites</router-link>
          </div> -->

          <!-- Like Icon -->
          <router-link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </router-link>
        </div>


        <!-- Hamburger -->
        <button data-collapse-toggle="navbar-search" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pry rounded-lg md:hidden focus:outline-none focus:ring-0"
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
          class="flex flex-col gap-4 p-4 md:p-0 mt-4 font-medium border border-border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:gap-0 ">

          <!-- Cryptocurrencies  -->
          <li>
            <router-link href="/"
              class="block py-2 px-3 text-pry text-sm font-semibold bg-accent rounded md:bg-transparent md:font-bold"
              aria-current="page">Cryptocurrencies</router-link>
          </li>

          <!-- Favorites  -->
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-pry text-sm font-semibold bg-accent rounded md:bg-transparent md:font-bold"
              aria-current="page">Favorites</router-link>
          </li>

          <!-- Crypto News  -->
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-pry text-sm font-semibold bg-accent rounded md:bg-transparent md:font-bold"
              aria-current="page">Crypto News</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>