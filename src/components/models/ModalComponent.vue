<template>
    <div class="relative z-10 shadow-xl" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white shadow-lg transition-all sm:my-8 min-w-96">
                    <!-- Content -->
                    <slot></slot>
                    
                </div>
            </div>
        </div>
    </div>
</template>
