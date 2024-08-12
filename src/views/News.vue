<template>
    <div>
        <section>
            <div class="py-8 p-6 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <div class="grid gap-20 md:gap-10 lg:grid-cols-2">
                    <article v-for="index in 5" :key="index" class="md:p-6 md:hover:bg-green-50">

                        <div class="flex justify-between items-center mb-5 text-pry">
                            <span
                                class="bg-green-100 text-pry text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                                <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                                    </path>
                                </svg>
                                Tutorial
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>

                        <!-- News Heading -->
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-pry hover:text-brand"><router-link to="/">The Future of
                                Crypto</router-link></h2>

                        <!-- News Description -->
                        <p class="mb-5 font-light text-sm text-pry">Static websites are now used to
                            bootstrap lots of websites and are becoming the basis for a variety of tools that even
                            influence both web designers and developers influence both web designers and developers.</p>

                        <!-- Bottom Section -->
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-2">

                                <!-- Author Image -->
                                <img class="w-5 h-5 rounded-full border border-gray-200" src="../assets/vue.svg"
                                    alt="image avatar" />

                                <!-- Author Name -->
                                <span class="font-medium text-pry text-sm">
                                    Jese Leos
                                </span>
                            </div>

                            <!-- Read More -->
                            <router-link to="/" class="flex items-center text-pry hover:text-brand">
                                <p  class="font-medium text-sm mb-1">
                                    Read more
                                </p>

                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </router-link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>