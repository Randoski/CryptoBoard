<template>
    <footer class="border-t border-border mt-24 shadow m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">

                <!-- Logo -->
                <router-link to="https://flowbite.com/" class="flex text-pry items-center mb-4 sm:mb-0 space-x-3">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="CryptoBoard Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">CryptoBoard</span>
                </router-link>

                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium ">

                    <!-- Documentation -->
                    <li>
                        <router-link to="/"
                            class="hover:underline me-4 md:me-6 text-pry hover:text-accent">Documentation</router-link>
                    </li>

                    <!-- Contact -->
                    <li>
                        <a href="mailto:monyerandy@yahoo.com" target="_blank"
                            class="hover:underline me-4 md:me-6 text-pry hover:text-accent">Contact</a>
                    </li>

                    <!-- About -->
                    <li>
                        <router-link to="/" class="hover:underline text-pry hover:text-accent">About</router-link>
                    </li>

                </ul>
            </div>
            <hr class="my-6 border-border sm:mx-auto  lg:my-8" />
            <span class="block text-sm text-sec sm:text-center ">© 2024
                <router-link to="/" class="hover:underline">CryptoBoard</router-link>. All Rights Reserved.</span>
        </div>
    </footer>
</template>