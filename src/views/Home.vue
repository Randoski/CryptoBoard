<template>
    <div class="mx-auto max-w-screen-xl px-4">
        <div class="relative shadow-mdg overflow-hidden">

            <!-- Heading -->
            <div class="grid gap-20 mt-8 md:mt-12 lg:grid-cols-3">
                <!-- Market Updates -->
                <div>
                    <!-- Heading -->
                    <h2 class="mb-2 text-md font-bold tracking-tight text-brand hover:text-brand"><router-link
                            to="/">Market Update</router-link></h2>

                    <!--  Description -->
                    <p class="mb-5 font-light text-sm text-pry">Some random texts talking about the Market Upda, it
                        should be a 2 liner.</p>

                    <!-- Total Coins  -->
                    <div class="flex justify-between items-center mb-1 hover:bg-gray-50">

                        <div class="flex items-center space-x-2 py-2">
                            <span class="font-medium text-pry text-sm ">
                                Total Coins
                            </span>
                        </div>

                        <p class="flex items-center text-pry gap-1 ">
                            <span class="font-semibold text-sm ">
                                50,000
                            </span>
                        </p>
                    </div>

                    <!-- Total Market Cap  -->
                    <div class="flex justify-between items-center mb-1 hover:bg-gray-50">

                        <div class="flex items-center space-x-2 py-2">
                            <span class="font-medium text-pry text-sm ">
                                Total Market Cap
                            </span>
                        </div>

                        <p class="flex items-center text-pry gap-1 ">
                            <span class="font-semibold text-sm ">
                                175,000,000
                            </span>
                        </p>
                    </div>

                    <!-- 24 Hrs Vol  -->
                    <div class="flex justify-between items-center mb-1 hover:bg-gray-50">

                        <div class="flex items-center space-x-2 py-2">
                            <span class="font-medium text-pry text-sm ">
                                24 Hrs Vol
                            </span>
                        </div>

                        <p class="flex items-center text-pry gap-1 ">
                            <span class="font-semibold text-sm ">
                                50,000
                            </span>
                        </p>
                    </div>

                </div>

                <!-- Top Gainers -->
                <div class="hidden md:block">  
                    <!-- Heading -->
                    <h2 class="mb-2 text-md font-bold tracking-tight text-brand"><router-link to="/">Top
                            Gainers</router-link></h2>

                    <!--  Description -->
                    <p class="mb-5 font-light text-sm text-pry">Some random texts talking about the top gainers, it
                        should be a 2 liner.</p>

                    <!-- Coins -->
                    <div v-for="index in 3" :key="index"
                        class="flex justify-between items-center mb-1 hover:bg-gray-50">
                        <router-link to="/" class="flex items-center space-x-2 py-2">
                            <!-- Crypto Icon -->
                            <img class="w-5 h-5 rounded-full border border-gray-200" src="../assets/vue.svg"
                                alt="image avatar" />

                            <!-- Crypto Name -->
                            <span class="font-medium text-pry text-sm ">
                                Bitcoin
                            </span>
                        </router-link>

                        <!-- Crypto Price -->
                        <router-link to="/" class="flex items-center text-pry gap-1 ">
                            <p class="font-medium text-sm ">
                                50,000
                            </p>

                            <!-- Percentage change -->
                            <p class="font-medium text-sm text-[9px]">10.5%</p>
                        </router-link>
                    </div>

                    <!-- View More -->
                    <router-link to="/" class="flex items-center justify-end mt-5 text-pry hover:text-brand">
                        <p class="font-medium text-sm mb-1">
                            View more
                        </p>

                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>

                <!-- Top Losers -->
                <div class="hidden md:block">
                    <!-- Heading -->
                    <h2 class="mb-2 text-md font-bold tracking-tight text-brand "><router-link to="/">Top
                            Losers</router-link></h2>

                    <!--  Description -->
                    <p class="mb-5 font-light text-sm text-pry">Some random texts talking about the top losers, it
                        should be a 2 liner.</p>

                    <!-- Coins -->
                    <div v-for="index in 3" :key="index"
                        class="flex justify-between items-center mb-1 hover:bg-gray-50">
                        <router-link to="/" class="flex items-center space-x-2 py-2">
                            <!-- Crypto Icon -->
                            <img class="w-5 h-5 rounded-full border border-gray-200" src="../assets/vue.svg"
                                alt="image avatar" />

                            <!-- Crypto Name -->
                            <span class="font-medium text-pry text-sm ">
                                Doge Coin
                            </span>
                        </router-link>

                        <!-- Crypto Price -->
                        <router-link to="/" class="flex items-center text-pry gap-1 ">
                            <p class="font-medium text-sm ">
                                50,000
                            </p>

                            <!-- Percentage change -->
                            <p class="font-medium text-sm text-[9px]">10.5%</p>
                        </router-link>
                    </div>

                    <!-- View More -->
                    <router-link to="/" class="flex items-center justify-end mt-5 text-pry hover:text-brand">
                        <p class="font-medium text-sm mb-1">
                            View more
                        </p>

                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>
            </div>

            <!-- Tabs -->
            <Tabs />

            <!-- Table -->
            <div class="overflow-x-auto mt-8">
                <table class="w-full text-sm text-left text-pry overflow-hidden">

                    <!-- Table Head -->
                    <thead class="text-xs bg-sec text-pry border-y border-border">
                        <tr>
                            <th scope="col" class="px-4 py-3">Coin</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3 hidden md:block">Market Price</th>
                            <th scope="col" class="px-4 py-3 ">1hr</th>
                            <th scope="col" class="px-4 py-3">24hr</th>
                            <th scope="col" class="px-4 py-3 hidden md:block">7d</th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        <tr v-for="index in 5" :key="index"
                            class="bg-white hover:bg-gray-100 border-b border-border text-pry ">
                            <!-- Coin -->
                            <th scope="row" class="flex gap-3 items-center px-4 py-2 whitespace-nowrap">
                                <!-- Like Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 ">
                                    <path
                                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>

                                <!-- Numbering -->
                                <p class="text-pry font-normal">1</p>

                                <!-- Coin Logo -->
                                <img src="../assets/vue.svg" class="w-6 ml-1 md:ml-3" alt="Coin Image">

                                <div>
                                    <!-- Coin Name -->
                                    <p class="font-semibold">Bitcoin</p>

                                    <!-- Coin Abbreviation-->
                                    <p class="text-[11px] font-medium text-pry">BTC</p>
                                </div>
                            </th>

                            <!-- Price -->
                            <td class="px-4 py-3">PC</td>

                            <!-- Market Price -->
                            <td class="px-4 py-3 hidden md:block">Apple</td>

                            <!-- 1hr -->
                            <td class="px-4 py-3">20</td>


                            <!-- 24hr -->
                            <td class="px-4 py-3">300</td>

                            <!-- 7d -->
                            <td class="px-4 py-3 hidden md:block">200</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <!-- Pagination -->
            <nav class="flex flex-col mt-4 md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4 bg-transparent"
                aria-label="Table navigation">
                <span class="text-sm font-normal text-pry">
                    Showing
                    <!-- Number br -->
                    <span class="font-semibold text-brand"><span>1 </span> - 10 </span>
                    of
                    <span class="font-semibold text-brand">1000</span>
                </span>

                <ul class="inline-flex items-stretch bg-transparent -space-x-px">
                    <!-- Previous -->
                    <li>
                        <div
                            class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500rounded-l-lg border border-border text-pry hover:bg-brand hover:text-sec cursor-pointer">
                            <span class="sr-only">Previous</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </li>

                    <!-- 1 -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-pry bg-transparent border border-border hover:bg-brand hover:text-sec cursor-pointer">
                            1</div>
                    </li>

                    <!-- 2 -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-pry bg-transparent border border-border hover:bg-brand hover:text-sec cursor-pointer">
                            2</div>
                    </li>

                    <!-- Current Page -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-pry bg-transparent border border-border hover:bg-brand hover:text-sec cursor-pointer">
                            3</div>
                    </li>

                    <!-- ... -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-pry bg-transparent border border-border hover:bg-brand hover:text-sec cursor-pointer">
                            ...</div>
                    </li>


                    <!-- 100 -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-pry bg-transparent border border-border hover:bg-brand hover:text-sec cursor-pointer">
                            100</div>
                    </li>

                    <!-- Next -->
                    <li>
                        <div
                            class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-pry bg-transparent border border-border hover:bg-brand hover:text-sec cursor-pointer">
                            <span class="sr-only">Next</span>
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </li>

                </ul>
            </nav>


            <!-- Top Gainers & Top Losers -->
            <div class="grid gap-8 lg:grid-cols-3 mt-8 md:hidden">

                <!-- Top Gainers -->
                <div>
                    <!-- Heading -->
                    <h2 class="mb-2 text-md font-bold tracking-tight text-brand"><router-link to="/">Top
                            Gainers</router-link></h2>

                    <!--  Description -->
                    <p class="mb-5 font-light text-sm text-pry">Some random texts talking about the top gainers, it
                        should be a 2 liner.</p>

                    <!-- Coins -->
                    <div v-for="index in 3" :key="index"
                        class="flex justify-between items-center mb-1 hover:bg-gray-50">
                        <router-link to="/" class="flex items-center space-x-2 py-2">
                            <!-- Crypto Icon -->
                            <img class="w-5 h-5 rounded-full border border-gray-200" src="../assets/vue.svg"
                                alt="image avatar" />

                            <!-- Crypto Name -->
                            <span class="font-medium text-pry text-sm ">
                                Bitcoin
                            </span>
                        </router-link>

                        <!-- Crypto Price -->
                        <router-link to="/" class="flex items-center text-pry gap-1 ">
                            <p class="font-medium text-sm ">
                                50,000
                            </p>

                            <!-- Percentage change -->
                            <p class="font-medium text-sm text-[9px]">10.5%</p>
                        </router-link>
                    </div>

                    <!-- View More -->
                    <router-link to="/" class="flex items-center justify-end mt-5 text-pry hover:text-brand">
                        <p class="font-medium text-sm mb-1">
                            View more
                        </p>

                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>

                <!-- Top Losers -->
                <div>
                    <!-- Heading -->
                    <h2 class="mb-2 text-md font-bold tracking-tight text-brand "><router-link to="/">Best
                            Losers</router-link></h2>

                    <!--  Description -->
                    <p class="mb-5 font-light text-sm text-pry">Some random texts talking about the top losers, it
                        should be a 2 liner.</p>

                    <!-- Coins -->
                    <div v-for="index in 3" :key="index"
                        class="flex justify-between items-center mb-1 hover:bg-gray-50">
                        <router-link to="/" class="flex items-center space-x-2 py-2">
                            <!-- Crypto Icon -->
                            <img class="w-5 h-5 rounded-full border border-gray-200" src="../assets/vue.svg"
                                alt="image avatar" />

                            <!-- Crypto Name -->
                            <span class="font-medium text-pry text-sm ">
                                Doge Coin
                            </span>
                        </router-link>

                        <!-- Crypto Price -->
                        <router-link to="/" class="flex items-center text-pry gap-1 ">
                            <p class="font-medium text-sm ">
                                50,000
                            </p>

                            <!-- Percentage change -->
                            <p class="font-medium text-sm text-[9px]">10.5%</p>
                        </router-link>
                    </div>

                    <!-- View More -->
                    <router-link to="/" class="flex items-center justify-end mt-5 text-pry hover:text-brand">
                        <p class="font-medium text-sm mb-1">
                            View more
                        </p>

                        <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "../components/Tabs.vue"

export default {
    components: {
        Tabs
    }
}
</script>