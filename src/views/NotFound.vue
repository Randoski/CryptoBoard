<template>
    <div class="">
        <div class="page-settings">
            <div class="error-container">
                <div>
                    <!-- Animation -->
                    <i class="fas fa-exclamation-triangle fa-5x animated-icon icon text-accent"></i>
                    <!-- 404 Message -->
                    <div class="flex flex-col justify-center items-center text-pry">
                        <h2 class=" font-bold text-[40px]">Ooops...</h2>
                        <p>The page you are looking for doesn't exist or has been moved</p>
                        
                        <!-- CTA -->
                            <div class="mt-10">
                            <router-link to="/" class="bg-transparent text-pry text-[14px] border border-border font-semibold px-4 py-3">Take Me Home</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}

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