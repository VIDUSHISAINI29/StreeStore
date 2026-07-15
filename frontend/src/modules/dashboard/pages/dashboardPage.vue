<script setup lang="ts">
   import { onMounted, ref } from 'vue';
   import { useAuthStore } from '@/modules/auth/store/auth.store';
   import { useRouter } from 'vue-router';
   import { getAllProjectForUser, createProject } from '../api/dashboard.api';
  

   type Project = {
      id: string;
      name: string;
      description?: string;
      createdAt: string;
   };
   type newProject = {
      name: string;
      description?: string;
   };
   const router = useRouter();
   const auth = useAuthStore();

   const openForm = ref(false);
   const projectsList = ref<Project[]>([]);

   const getProjects = async () => {
      try {
         const data = await getAllProjectForUser();
         console.log('data -', data);
         projectsList.value = data;
      } catch (error) {
         console.error('Error fetching projects:', error);
      }
   };

   const createProjectFunction = async (formData: newProject) => {
      try {
         if (!formData.name.trim()) {
            alert('Project name is required');
            return;
         }
         const newProject = await createProject(formData);
         //  projectsList.value.push(newProject);
         console.log('New project created:', newProject);
         await getProjects();
      } catch (error) {
         console.error('Error creating project:', error);
      }
   };

   onMounted(async () => {
      await getProjects();
   });
</script>
<template>
   <div class="tw-py-2 tw-px-4 tw-w-full">
      <div class="tw-flex tw-flex-col tw-gap-6" v-if="projectsList.length">
         <div class="tw-flex tw-items-center tw-justify-between tw-text-4xl">
            <div class="tw-flex tw-gap-1 tw-flex-col">
               <span class="tw-font-semibold tw-text-white">Dashboard</span>
               <span class="tw-text-sm tw-text-pulse-grayText">
                  Overview of your projects and API health.
               </span>
            </div>
            <div class="tw-flex tw-gap-5">
               
               <div
                  class="tw-rounded-md  tw-bg-gradient-to-r tw-from-pulse-cyan tw-to-pulse-lime tw-p-[1px]">
                  <div @click="openForm=true"
                     class=" tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-gap-1 tw-rounded-md tw-bg-pulse-bg tw-px-2 tw-py-1">
                     <span
                        class="tw-mb-[4px] tw-rounded-md tw-text-center tw-text-2xl tw-text-pulse-cyan">
                        +
                     </span>
                     <span
                        class="tw-text-sm tw-font-semibold tw-text-pulse-cyan">
                        Create Project
                     </span>
                  </div>
               </div>

                <div
                  class="tw-rounded-md  tw-bg-gradient-to-r tw-from-pulse-cyan tw-to-pulse-lime tw-p-[1px]">
                  <div @click="auth?.logout(router)"
                     class=" tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-gap-1 tw-rounded-md tw-bg-pulse-bg tw-px-5 tw-py-3">
                    
                     <span
                        class="tw-text-sm tw-font-semibold tw-text-pulse-cyan">
                        Logout
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div class="tw-flex tw-flex-wrap tw-gap-4 lg:tw-gap-0 tw-w-full tw-justify-between ">
            <overviewCard
               mainText="Total Projects"
               :subText="0"
               gradientFrom="tw-from-pulse-cyan"
               shadow="tw-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
               icon="pi pi-folder"
               iconColor="tw-text-pulse-cyan"
               iconBg="tw-bg-pulse-cyan/20" />
            
            <overviewCard
               mainText="Total Endpoints"
               :subText="0"
               gradientFrom="tw-from-pulse-lime"
               shadow="tw-shadow-[0_0_20px_rgba(213,252,91,0.3)]"
               icon="pi pi-server"
               iconColor="tw-text-pulse-lime"
               iconBg="tw-bg-pulse-lime/20" />
            
            <overviewCard
               mainText="Overall Uptime"
               :subText="0"
               gradientFrom="tw-from-pulse-green"
               shadow="tw-shadow-[0_0_20px_rgba(73,230,184,0.3)]"
               icon="pi pi-stopwatch"
               iconColor="tw-text-pulse-green"
               iconBg="tw-bg-pulse-green/20" />
            
            <overviewCard
               mainText="Total Incidents"
               :subText="0"
               gradientFrom="tw-from-pulse-error"
               shadow="tw-shadow-[0_0_20px_rgba(239,68,68,0.3)]"
               icon="pi pi-exclamation-triangle"
               iconColor="tw-text-pulse-error"
               iconBg="tw-bg-pulse-error/20" />
            
         </div>
        
      </div>
      <div
         v-else-if="projectsList.length === 0"
         class="tw-flex tw-min-h-screen tw-items-center tw-justify-center">
         <div
            class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2">
            <span
               class="tw-bg-gradient-to-r tw-from-pulse-cyan tw-to-pulse-lime tw-bg-clip-text tw-p-1 tw-text-5xl tw-font-semibold tw-text-transparent">
               Welcome to Pulse
            </span>
            <span class="tw-p-1 tw-text-2xl tw-font-semibold tw-text-white">
               Create your first project to start monitoring APIs
            </span>
            <button
               @click="openForm = true"
               class="tw-mt-4 tw-rounded-md tw-bg-pulse-cyan tw-px-6 tw-py-3 tw-font-semibold tw-text-white">
               <i class="pi pi-plus tw-text-sm tw-font-semibold"></i>
               Create Project
            </button>
         </div>
      </div>
       <div class="tw-flex tw-h-screen tw-items-center tw-justify-center" v-else>
         <ProgressSpinner />
      </div>
      <CreateProjectForm
      class="transition-all tw-duration-300 tw-scale-105"
         :modalOpen="openForm"
         @update:modalOpen="openForm = $event"
         @create="createProjectFunction" />


   </div>
</template>
<style scoped>
   /* Focus states */
   :deep(.p-floatlabel:has(.p-inputtext:focus) label),
   :deep(.p-floatlabel:has(.p-textarea:focus) label),
   :deep(.p-floatlabel:has(.p-autocomplete.p-inputwrapper-focus) label),
   :deep(.p-floatlabel:has(.p-password.p-inputwrapper-focus) label) {
      color: #67e8f9 !important;
   }

   /* Filled state */
   :deep(.p-floatlabel:has(.p-filled) label),
   :deep(.p-floatlabel:has(.p-password .p-filled) label) {
      color: #67e8f9 !important;
   }
</style>


