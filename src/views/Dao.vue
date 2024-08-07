<template>
    <div class="mx-auto max-w-screen-xl px-4">
        <div class="relative shadow-mdg overflow-hidden">
            <!-- Heading -->
            <div class="flex flex-col md:flex-row justify-between mt-12 md:mt-24">

                <!-- Heading Texts -->
                <div>
                    <div class="text-pry">
                        <h1 class="font-bold text-xl md:text-2xl">Crypto Heading</h1>
                        <p class="mt-1 text-[14px] font-medium">Some text about the types of crypto listed</p>
                    </div>

                    <!-- Market details  -->
                    <div class="mt-8 text-pry flex gap-8 md:gap-12">
                        <!-- Total Coins -->
                        <div>
                            <p class="font-medium text-[10px]">Total Coins</p>
                            <p class="font-semibold text-[14px]">10,000</p>
                        </div>

                        <!-- Total Market Cap -->
                        <div>
                            <p class="font-medium text-[10px]">Total Market Cap</p>
                            <p class="font-semibold text-[14px]">5 Million</p>
                        </div>

                        <!-- 24 hours volume -->
                        <div>
                            <p class="font-medium text-[10px]">24 Hrs Vol.</p>
                            <p class="font-semibold text-[14px]">70 Million</p>
                        </div>
                    </div>
                </div>

                <!-- Search -->
                <div class="w-full md:w-1/2 mt-8">
                    <form class="flex items-end">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-sec" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>

                            <!-- Search Input -->
                            <input type="text" id="simple-search"
                                class="border bg-background border-border text-pry text-sm block w-full pl-10 p-2"
                                placeholder="Search">
                        </div>
                    </form>
                </div>
            </div>

            <Tabs />

            <!-- Table -->
            <div class="overflow-x-auto mt-12">
                <table class="w-full text-sm text-left text-pry ">

                    <!-- Table Head -->
                    <thead class="text-xs border-y border-border">
                        <tr>
                            <th scope="col" class="px-4 py-3">Coin</th>
                            <th scope="col" class="px-4 py-3">Price</th>
                            <th scope="col" class="px-4 py-3 hidden md:block">Market Price</th>
                            <th scope="col" class="px-4 py-3">1hr</th>
                            <th scope="col" class="px-4 py-3">24hr</th>
                            <th scope="col" class="px-4 py-3 hidden md:block">7d</th>
                        </tr>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        <tr v-for="index in 50" :key="index" class="border-b border-border text-pr font-semibold">
                            <!-- Coin-->
                            <th scope="row" class="flex gap-3 items-center px-4 py-2 whitespace-nowrap">
                                <!-- Like Icon -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-4">
                                    <path
                                        d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>

                                <!-- Numbering -->
                                <p class="text-sec">1</p>

                                <!-- Coin Logo -->
                                <img src="../assets/vue.svg" class="w-8 ml-2 md:ml-6" alt="Coin Image">

                                <div>
                                    <!-- Coin Name -->
                                    <p class="font-semibold">Bitcoin</p>

                                    <!-- Coin Abbreviation-->
                                    <p class="text-[11px] font-medium">BTC</p>
                                </div>
                            </th>

                            <!-- Price -->
                            <td class="px-4 py-3">PC</td>

                            <!-- Market Price -->
                            <td class="px-4 py-3 hidden md:block">Apple</td>

                            <!-- 1hr -->
                            <td class="px-4 py-3">300</td>

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
                <span class="text-sm font-normal text-sec">
                    Showing
                    <!-- Number br -->
                    <span class="font-semibold text-pry">1-10</span>
                    of
                    <span class="font-semibold text-pry">1000</span>
                </span>

                <ul class="inline-flex items-stretch bg-transparent -space-x-px">
                    <!-- Previous -->
                    <li>
                        <div
                            class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500rounded-l-lg border border-border text-sec hover:bg-pry hover:text-background">
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
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">1</div>
                    </li>

                    <!-- 2 -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">2</div>
                    </li>

                    <!-- Current Page -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">3</div>
                    </li>

                    <!-- ... -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">...</div>
                    </li>


                    <!-- 100 -->
                    <li>
                        <div
                            class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">100</div>
                    </li>

                    <!-- Next -->
                    <li>
                        <div
                            class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">
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