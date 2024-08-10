<template>
    <div class="mx-auto max-w-screen-xl px-4">
        <div class="relative shadow-mdg overflow-hidden">
            <!-- Heading -->
            <div class="flex flex-col gap-4 md:flex-row justify-between mt-8 md:mt-8">
                <!-- Market details  -->
                <div
                    class="flex flex-col text-sm p-3 bg-transparent border border-border rounded-sm md:flex-row md:w-1/3 md:gap-4">
                    <div>
                        <!-- Total Coins -->
                        <div>
                            <p class="font-bold text-brand">10,000</p>
                            <p class="font-semibold text-[12px]">Total Coins</p>
                        </div>

                        <!-- Total Market Cap -->
                        <div class="mt-3">
                            <p class="font-bold text-brand">5 Million</p>
                            <p class="font-semibold text-[12px] ">Total Market Cap</p>
                        </div>

                        <!-- 24 hours volume -->
                        <div class="mt-3">
                            <p class="font-bold text-brand">70 Million</p>
                            <p class="font-semibold text-[12px] ">24 Hrs Vol.</p>
                        </div>
                    </div>
                </div>

                <!-- Top Gainers -->
                <div
                    class="hidden md:flex flex-col text-sm p-3 bg-transparent border border-border md:flex-row md:w-1/3 md:gap-4">
                    <div class="flex flex-col w-full"> <!-- Added flex-col and w-full for full width -->
                        <div class="flex justify-between">
                            <p class="font-bold ">Top Gainers</p>
                            <router-link to="/" class="font-semibold text-brand hover:text-pry text-[12px]">View
                                More</router-link>
                        </div>

                        <!-- Coins -->
                        <div class="mt-3">
                            <div v-for="index in 4" :key="index" class="flex items-center justify-between">
                                <!-- Added flex to container -->
                                <!-- Icon & Coin Name -->
                                <div class="flex gap-1 pt-2 items-center font-semibold">
                                    <img class="w-4" src="../assets/vue.svg" alt="Icon">
                                    <p>Bitcoin</p>
                                </div>

                                <!-- Amount & Percentage Change -->
                                <div class="flex text-[12px] gap-1 pt-2">
                                    <p class="font-semibold">50,000</p>
                                    <p class="text-[10px]">12.46%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Top Losers -->
                <div
                    class="hidden md:flex flex-col text-sm p-3 bg-transparent border border-border md:flex-row md:w-1/3 md:gap-4">
                    <div class="flex flex-col w-full"> <!-- Added flex-col and w-full for full width -->
                        <div class="flex justify-between">
                            <p class="font-bold ">Top Losers</p>
                            <router-link to="/" class="font-semibold text-brand hover:text-pry text-[12px]">View
                                More</router-link>
                        </div>

                        <!-- Coins -->
                        <div class="mt-3">
                            <div v-for="index in 4" :key="index" class="flex items-center justify-between">
                                <!-- Added flex to container -->
                                <!-- Icon & Coin Name -->
                                <div class="flex gap-1 pt-2 items-center font-semibold">
                                    <img class="w-4" src="../assets/vue.svg" alt="Icon">
                                    <p>Bitcoin</p>
                                </div>

                                <!-- Amount & Percentage Change -->
                                <div class="flex text-[12px] gap-1 pt-2">
                                    <p class="font-semibold">50,000</p>
                                    <p class="text-[10px]">12.46%</p>
                                </div>
                            </div>
                        </div>
                    </div>
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