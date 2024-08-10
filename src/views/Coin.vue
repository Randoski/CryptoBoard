<template>
    <div class="max-w-screen-xl items-center justify-between mx-auto p-4">
    <!-- Coin Details -->
    <div class="text-pry justify-between mt-4 md:flex md:items-center md:mt-8">

        <!-- Coin Name & Abbreviation -->
        <div class="flex items-center gap-1">
            <h1 class="font-bold text-xl md:text-2xl">Bitcoin</h1>
            <p class="font-semibold text-[10px] text-pry">BTC</p>
        </div>

        <!-- Coin Price -->
        <div class="font-bold text-[12px] md:text-[16px]">
            <p>N5,000</p>
        </div>
    </div>

    <!-- Tabs Heading -->
    <div class="mt-4 mb-4 border-b border-border">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-brand hover:text-brand border-brand"
            data-tabs-inactive-classes="text-pry hover:text-brand border-transparent"
            role="tablist">

            <!-- Price Heading-->
            <li class="me-2 font-semibold" role="presentation">
                <button class="inline-block py-4 pr-4 border-b-2 rounded-t-lg" id="profile-styled-tab"
                    data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile"
                    aria-selected="false">Profile</button>
            </li>

            <!-- About Heading -->
            <li class="me-2 font-semibold" role="presentation">
                <button class="inline-block py-4 pr-4 border-b-2 rounded-t-lg" id="settings-styled-tab"
                    data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings"
                    aria-selected="false">About</button>
            </li>
        </ul>
    </div>

    <!-- Tabs Body -->
    <div id="default-styled-tab-content">
        <!-- Price -->
        <div class="hidden" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
            <Price />
        </div>

        <!-- About -->
        <div class="hidden" id="styled-settings" role="tabpanel"
            aria-labelledby="settings-tab">
            <About />
        </div>
    </div>

    </div>
</template>


<script>
import Price from '../components/Price.vue';
import About from '../components/About.vue';

export default {
    components: {
        Price,
        About,
    }
}
</script>