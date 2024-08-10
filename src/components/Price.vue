<template>
    <div class="text-pry max-w-screen-xl mx-auto">
        <!-- Summary -->
        <p class="text-[13px] pt-2">
            <span class="font-bold">Summary - </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem necessitatibus ratione
            magni? Fuga nam id consectetur. Deleniti, voluptates quibusdam.
        </p>

        <!-- Price Chart -->
        <div class="flex mt-8 gap-4">
            <!-- 3hr -->
            <div class="flex gap-1 text-[13px]">
                <p class="font-sm">3h:</p>
                <p class="font-bold">5%</p>
            </div>

            <!-- High -->
            <div class="flex gap-1 text-[13px]">
                <p class="font-sm">High:</p>
                <p class="font-bold">55,000</p>
            </div>

            <!-- Low -->
            <div class="flex gap-1 text-[13px]">
                <p class="font-sm">Low:</p>
                <p class="font-bold">25,000</p>
            </div>

            <!-- Average -->
            <div class="flex gap-1 text-[13px]">
                <p class="font-sm">Average:</p>
                <p class="font-bold">32,500</p>
            </div>
        </div>

        <!-- Chart -->
        <div class="mt-8">
            <!-- Placeholder for the Chart -->
            <div class="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                <p class="text-gray-500">Chart Component Goes Here</p>
            </div>
        </div>

        <!-- Calculator & Supply Information -->
        <div class="mt-16 md:flex md:gap-16 md:mt-16">
            <!-- Calculator -->
            <div class="md:w-1/2">
                <h1 class="font-bold text-xl text-brand">Calculator</h1>
                <p class="mt-1 text-sm font-medium text-pry">Statement about what the Calculator does</p>

                <div class="mt-6">
                    <!-- Calculator Input 1 -->
                    <div class="flex items-center mt-8">
                        <input
                            class="w-1/2 h-11 border border-border px-3 text-[13px] font-medium focus:ring-transparent focus:border-brand "
                            type="text" placeholder="Enter value">

                        <!-- Dropdown menu -->
                        <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch"
                            data-dropdown-placement="bottom"
                            class="text-sec bg-brand focus:outline-none focus:ring-brand font-medium text-sm px-5 py-2.5 h-11 w-1/2 text-center inline-flex items-center"
                            type="button">Convert<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <!-- Dropdown Items & Search -->
                        <div id="dropdownSearch" class="z-10 hidden bg-sec shadow w-60">
                            <div class="p-3">
                                <label for="input-group-search" class="sr-only">Search</label>
                                <div class="relative">

                                    <!-- Search Icon -->
                                    <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-3 h-3 text-pry" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>

                                    <!-- Search Input -->
                                    <input type="text" id="input-group-search"
                                        class="block w-full p-1.5 ps-8 text-[14px] text-pry border border-border bg-sec focus:ring-transparent focus:border-brand"
                                        placeholder="Search Coin">
                                </div>
                            </div>

                            <!-- Dropdown List -->
                            <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm" aria-labelledby="dropdownSearchButton">
                                <li v-for="index in 5" :key="index">
                                    <div class="flex items-center  hover:bg-gray-100">
                                        <label for="checkbox-item-11"
                                            class="w-full py-2 ms-2 text-sm font-semibold text-pry cursor-pointer">Bitcoin
                                            <span class="text-[10px] pl-1 font-normal">BTC</span></label>
                                    </div>
                                </li>
                            </ul>

                        </div>


                    </div>

                    <!-- Convert Icon -->
                    <div class="flex justify-center my-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-pry hover:text-brand cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                    </div>

                    <!-- Calculator Input 2 -->
                    <div class="flex items-center">
                        <input
                            class="w-1/2 h-11 border border-border px-3 text-[13px] font-medium focus:ring-transparent focus:border-brand "
                            type="text" placeholder="Enter value">

                        <!-- Dropdown menu -->
                        <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch"
                            data-dropdown-placement="bottom"
                            class="text-sec bg-brand focus:outline-none focus:ring-brand font-medium text-sm px-5 py-2.5 h-11 w-1/2 text-center inline-flex items-center"
                            type="button">Convert<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <!-- Dropdown Items & Search -->
                        <div id="dropdownSearch" class="z-10 hidden bg-sec shadow w-60">
                            <div class="p-3">
                                <label for="input-group-search" class="sr-only">Search</label>
                                <div class="relative">

                                    <!-- Search Icon -->
                                    <div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-3 h-3 text-pry" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>

                                    <!-- Search Input -->
                                    <input type="text" id="input-group-search"
                                        class="block w-full p-1.5 ps-8 text-[14px] text-pry border border-border bg-sec focus:ring-transparent focus:border-brand"
                                        placeholder="Search Coin">
                                </div>
                            </div>

                            <!-- Dropdown List -->
                            <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm" aria-labelledby="dropdownSearchButton">
                                <li v-for="index in 5" :key="index">
                                    <div class="flex items-center  hover:bg-gray-100">
                                        <label for="checkbox-item-11"
                                            class="w-full py-2 ms-2 text-sm font-semibold text-pry cursor-pointer">Bitcoin
                                            <span class="text-[10px] pl-1 font-normal">BTC</span></label>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <!-- Convert Date-->
                    <div class="flex mt-6 gap-2">
                        <button class="bg-brand w-2/5 h-11 text-white font-medium text-[13px]">Current Value</button>

                        <!-- Date Picker -->
                        <div class="relative w-3/5 h-11">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-4 h-11 text-border" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input datepicker id="default-datepicker" type="text"
                                class="h-11 bg-transparent border border-border text-pry text-bold text-[13px] font-medium focus:ring-transparent focus:border-brand block w-full ps-10 p-2"
                                placeholder="Value on older date">
                        </div>

                    </div>
                </div>
            </div>

            <!-- Supply Information -->
            <div class="mt-14 md:mt-0 md:w-1/2">
                <h1 class="font-bold text-xl text-brand">Supply Information</h1>
                <p class="mt-1 text-sm font-medium text-pry">Statement about what the Supply Information is</p>

                <!-- Supply Verification -->
                <div class="flex justify-between mt-8 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-check-circle text-brand"></i></span>
                        Supply Verification
                    </div>
                    <div class="font-semibold text-sm">Verified Supply</div>
                </div>

                <!-- Circulating Supply -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-infinity text-brand"></i></span>
                        Circulating Supply
                    </div>
                    <div class="font-semibold text-sm">5,000</div>
                </div>

                <!-- Total Supply -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-cubes text-brand"></i></span>
                        Total Supply
                    </div>
                    <div class="font-semibold text-sm">34,000</div>
                </div>

                <!-- Max Supply -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-cubes text-brand"></i></span>
                        Max Supply
                    </div>
                    <div class="font-semibold text-sm">21,000</div>
                </div>
            </div>
        </div>


        <!-- Value Statistics & Links -->
        <div class="mt-16 md:flex md:gap-16 md:mt-16">

            <!-- Value Statistics -->
            <div class="mt-14 md:mt-0 md:w-1/2">
                <h1 class="font-bold text-xl text-brand">Value Statistics</h1>
                <p class="mt-1 mb-2 text-sm font-medium text-pry">Statement about what the Value Statistics is</p>

                <!-- Coin Ranking -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-star text-brand"></i></span>
                        Coin Ranking
                    </div>
                    <div class="font-semibold text-sm">Verified Supply</div>
                </div>

                <!-- Price to BTC -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-money-bill-alt text-brand"></i></span>
                        Price to BTC
                    </div>
                    <div class="font-semibold text-sm">Price to BTC</div>
                </div>

                <!-- Price to NGN -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-dollar-sign text-brand"></i></span>
                        Price to NGN
                    </div>
                    <div class="font-semibold text-sm">Price to NGN</div>
                </div>

                <!-- 24h Volume -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-layer-group text-brand"></i></span>
                        24h Volume
                    </div>
                    <div class="font-semibold text-sm">24h Volume</div>
                </div>

                <!-- Market Cap -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-chart-pie text-brand"></i></span>
                        Market Cap
                    </div>
                    <div class="font-semibold text-sm">Market Cap</div>
                </div>

                <!-- Volume / Market Cap -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-chart-line text-brand"></i></span>
                        Volume / Market Cap
                    </div>
                    <div class="font-semibold text-sm">Volume / Market Cap</div>
                </div>

                <!-- Fully Diluted Market Cap -->
                <div class="flex justify-between mt-5 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-chart-area text-brand"></i></span>
                        Fully Diluted Market Cap
                    </div>
                    <div class="font-semibold text-sm">Fully Diluted Market Cap</div>
                </div>

                <!-- All Time High -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-trophy text-brand"></i></span>
                        All Time High
                    </div>
                    <div class="font-semibold text-sm">All Time High</div>
                </div>

                <!-- All Time High Date -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-calendar-alt text-brand"></i></span>
                        All Time High Date
                    </div>
                    <div class="font-semibold text-sm">All Time High Date</div>
                </div>
            </div>


            <!-- Links -->
            <div class="mt-14 md:mt-0 md:w-1/2">
                <h1 class="font-bold text-xl text-brand">Links</h1>
                <p class="mt-1 text-sm font-medium text-pry">Statement about what the Links is</p>

                <!-- Supply Verification -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-check-circle text-brand"></i></span>
                        Supply Verification
                    </div>
                    <div class="font-semibold text-sm">Verified Supply</div>
                </div>

                <!-- Circulating Supply -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-infinity text-brand"></i></span>
                        Circulating Supply
                    </div>
                    <div class="font-semibold text-sm">5,000</div>
                </div>

                <!-- Total Supply -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-cubes text-brand"></i></span>
                        Total Supply
                    </div>
                    <div class="font-semibold text-sm">34,000</div>
                </div>

                <!-- Max Supply -->
                <div class="flex justify-between mt-6 pb-4 border-b border-border">
                    <div class="flex gap-2 text-sm items-center">
                        <span class="icon"><i class="fas fa-cubes text-brand"></i></span>
                        Max Supply
                    </div>
                    <div class="font-semibold text-sm">21,000</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Icons for link section
            icons: {
                bitcointalk: "fab fa-bitcoin",
                explorer: "fas fa-search",
                discord: "fab fa-discord",
                facebook: "fab fa-facebook",
                github: "fab fa-github",
                instagram: "fab fa-instagram",
                linkedin: "fab fa-linkedin",
                medium: "fab fa-medium",
                qq: "fas fa-comment",
                quora: "fab fa-quora",
                reddit: "fab fa-reddit",
                telegram: "fab fa-telegram",
                tiktok: "fas fa-video",
                twitter: "fab fa-twitter",
                vkontakte: "fas fa-comment",
                wechat: "fas fa-comment",
                whitepaper: "fas fa-file-alt",
                youtube: "fab fa-youtube",
                website: "fas fa-globe",
                etc: "fas fa-ellipsis-h-alt",
            },
        }
    }
}
</script>
