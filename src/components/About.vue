<template>
    <div class="text-center my-[120px]">

        <!-- Animation -->
        <i class="fas fa-exclamation-triangle fa-4x md:fa-5x animated-icon text-brand"></i>

        <!-- 404 Message -->
        <div>
            <h2 class="text-brand font-bold text-2xl md:text-4xl ">Ooops...</h2>
            <p class="mt-4 font-semibold text-pry">
                This page does not have any content at the moment, please check back later
            </p>

            <!-- CTA -->
            <div class="mt-8">
                <router-link to="/"
                    class="font-medium text-sm bg-brand text-sec py-2 px-4 hover:text-brand hover:bg-transparent border border-brand">Take
                    Me Home
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animated-icon {
    animation: swing 1s infinite;
}

@keyframes swing {

    0%,
    100% {
        transform: rotate(0deg);
    }

    20%,
    60% {
        transform: rotate(15deg);
    }

    40%,
    80% {
        transform: rotate(-15deg);
    }
}

@import "~animate.css/animate.min.css";
</style>