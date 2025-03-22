import { api } from "@/lib/axios"
import { ProjectProps } from "@core"
import { AxiosResponse, isAxiosError } from "axios"

export async function projectFindManyService(): Promise<ProjectProps.Props[] | undefined> {
    try {
        const { data }: AxiosResponse<ProjectProps.Props[]> = await api.get('/projects')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
