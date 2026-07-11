import {apiPost, apiGet} from "@/plugins/api";
type Project = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
};
// type GetProjectsResponse = Project[];
export const getAllProjectForUser = async () => {
    return apiGet<Project[]>('/projects/all-projects');
}
type CreateProjectPayload = {
   name: string;
   description?: string;
}
export const createProject = async (payload: CreateProjectPayload) => {
    return apiPost<CreateProjectPayload>('/projects/create-project', payload);
}