import { api } from "@/lib/axios"
import { TechnologyProps } from '@core'
import { AxiosResponse, isAxiosError } from "axios"

export async function technologyFindManyService(): Promise<TechnologyProps.Props[] | undefined> {
    try {
        const { data }: AxiosResponse<TechnologyProps.Props[]> = await api.get('/technologies')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
