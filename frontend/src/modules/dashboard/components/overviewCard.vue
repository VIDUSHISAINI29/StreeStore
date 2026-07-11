<script setup lang="ts">

const props = defineProps<{
   mainText: string;
   subText: number | string;
   gradientFrom: string;
   shadow: string;
   icon: string;
   iconColor: string;
   iconBg: string;

}>();

</script>

<template>

<div :class="['tw-w-[230px] 2xl:tw-w-[300px] tw-p-[1px] tw-rounded-xl tw-bg-gradient-to-r  tw-via-pulse-border tw-to-pulse-border', props.shadow, props.gradientFrom]">
  
  <div class="tw-w-full tw-rounded-xl tw-bg-pulse-bg">
    <div class="tw-flex tw-p-2">
        <div class="tw-flex tw-justify-center tw-items-center tw-w-14 ">
            <div :class="[' tw-flex tw-justify-center tw-items-center tw-rounded-full tw-w-9 tw-h-9', props.iconBg]">
                <i :class="[props.icon, props.iconColor]"></i>
            </div>
        </div>
        <div class="tw-p-2 tw-text-white">
      <div class="tw-text-pulse-grayText">
                  <span>
                     {{ props.mainText }}
                  </span>
               </div>
               <div class="tw-text-xl">
                  <span>{{ props.subText }}</span>
               </div>
    </div>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>