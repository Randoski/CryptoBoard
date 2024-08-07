<template>
    <div>

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
                    <a href="#"
                        class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500rounded-l-lg border border-border text-sec hover:bg-pry hover:text-background">
                        <span class="sr-only">Previous</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>

                <!-- 1 -->
                <li>
                    <a href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">1</a>
                </li>

                <!-- 2 -->
                <li>
                    <a href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">2</a>
                </li>

                <!-- Current Page -->
                <li>
                    <a href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">3</a>
                </li>

                <!-- ... -->
                <li>
                    <a href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">...</a>
                </li>


                <!-- 100 -->
                <li>
                    <a href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">100</a>
                </li>

                <!-- Next -->
                <li>
                    <a href="#"
                        class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-sec bg-transparent border border-border hover:bg-white hover:text-background">
                        <span class="sr-only">Next</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
</template>