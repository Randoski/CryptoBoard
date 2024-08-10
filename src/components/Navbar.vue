<template>
  <nav class="bg-white border border-border ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6" alt="CryptoBoard Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap">CryptoBoard</span>
      </router-link>

      <!-- Nav -->
      <div class="flex md:order-2">
        <!-- Mobile Search Icon -->
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
          class="md:hidden text-pry text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>

        <!-- Desktop Search -->
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-pry" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-pry border-gray-300 focus:ring-transparent focus:border-brand" placeholder="Search...">
        </div>

        <!-- Hamburger -->
        <button data-collapse-toggle="navbar-search" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pry md:hidden focus:ring-transparent focus:ring-brand"
          aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <!-- Nav Links -->
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-pry" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>

          <!-- Mobile Search (Large) -->
          <input type="text" id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-pry border border-border bg-sec focus:ring-transparent focus:border-brand "
            placeholder="Search...">
        </div>

        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-semibold text-sm border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          <!-- Home -->
          <li>
            <router-link to="/"
              class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:p-0 md:text-pry md:hover:text-brand"
              aria-current="page">Home</router-link>
          </li>

          <!-- Crypto News Link -->
          <li>
            <router-link to="/news"
              class="block py-2 px-3 mt-1 text-pry bg-transparent hover:bg-brand hover:text-sec rounded md:bg-transparent md:hover:bg-transparent md:p-0 md:mt-0 md:text-pry md:hover:text-brand">Crypto
              News</router-link>
          </li>

          <!-- Extra Link -->
          <li>
            <router-link to="/"
              class="block py-2 px-3 mt-1 text-pry bg-transparent hover:bg-brand hover:text-sec rounded md:bg-transparent md:hover:bg-transparent md:p-0 md:mt-0 md:text-pry md:hover:text-brand">Extra</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
f