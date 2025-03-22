import { api } from "@/lib/axios"
import { TechnologyProps } from '@core'
import { AxiosResponse, isAxiosError } from "axios"

export async function technologyFindDetachedService(): Promise<TechnologyProps.Props[] | undefined> {
    try {
        const { data }: AxiosResponse<TechnologyProps.Props[]> = await api.get('/detached/technologies')
        const technologies = data.filter(technology => technology.isDetached === true) 
        return technologies
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
