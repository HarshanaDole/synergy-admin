import { Project } from "../admin/models/project";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetchData("http://localhost:5000/api/projects", {
    method: "GET",
  });
  return response.json();
}

export async function fetchProject(projectId?: string): Promise<Project> {
  const response = await fetchData(
    "http://localhost:5000/api/projects/" + projectId,
    {
      method: "GET",
    }
  );
  return response.json();
}

export interface ProjectInput {
  imageUrl?: string;
  type: string;
  client: string;
  location: string;
  year: number;
  description?: string;
}

export async function createProject(project: FormData): Promise<Project> {
  const response = await fetchData("http://localhost:5000/api/projects", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: project,
  });
  return response.json();
}

export async function updateProject(
  projectId: string,
  project: FormData
): Promise<Project> {
  const response = await fetchData(
    "http://localhost:5000/api/projects/" + projectId,
    {
      method: "PATCH",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: project,
    }
  );
  return response.json();
}

export async function deleteProject(projectId: string) {
  await fetchData("http://localhost:5000/api/projects/" + projectId, {
    method: "DELETE",
  });
}
