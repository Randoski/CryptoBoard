<template>
    <div>
        <div class="flex overflow-x-scroll flex-wrap gap-4 text-sm font-medium text-center text-sec mt-8 md:mt-12">
            <!-- Tabs -->
            <router-link to="/" class="bg-border text-pry text-sm px-3 py-2 rounded-sm font-semibold" :class="{ 'bg-accent': $route.path === '/' }">All</router-link>
            <router-link v-for="link in links" :key="link" :to="'/' + link"
                class="bg-border text-pry text-sm px-3 py-2 rounded-sm font-semibold" :class="{ 'bg-accent': $route.path === '/' + link }">{{ link }}</router-link>
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