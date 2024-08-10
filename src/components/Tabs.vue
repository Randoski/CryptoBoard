<template>
    <div>
        <div
            class="tabs-container flex overflow-x-auto whitespace-nowrap gap-4 text-sm font-medium text-center text-sec mt-8 md:mt-12">
            <!-- Tabs -->
            <router-link to="/"
                class=" text-pry text-[12px] font-semibold px-2.5 py-2 rounded-sm hover:bg-brand hover:text-sec"
                :class="{ 'bg-brand text-sec px-3': $route.path === '/' }">
                All
            </router-link>

            <!-- Tabs -->
            <router-link v-for="link in links" :key="link" :to="'/' + link"
                class=" text-pry text-[12px] font-bold px-2.5 py-2 rounded-sm hover:bg-brand hover:text-sec"
                :class="{ 'bg-brand text-sec px-3': $route.path === '/' + link }">
                {{ link }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                "gainers",
                "losers",
                "stablecoin",
                "layer-1",
                "layer-2",
                "exchange",
                "defi",
                "nft",
                "web3",
                "metaverse",
                "dex",
                "staking",
                "dao",
                "meme",
                "privacy",
                "gaming",
                "wrapped",
                "fan-token",
                "football-club",
                "social",
            ],
        };
    }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.tabs-container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.tabs-container {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>
