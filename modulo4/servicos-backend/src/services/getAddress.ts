
import axios from "axios";
import { Address } from "../types";
import { baseURL } from "../data/baseURL"



export const getAddressInfo = async (zipcode: string, number: string, complement: string ): Promise<Address | null> => {
    try {

        const addressInfo  = await axios.get(`${baseURL}/${zipcode}/json`)

        const address: Address = {
            state: addressInfo.data.uf,
            city: addressInfo.data.localidade,
            distric: addressInfo.data.bairro,
            street: addressInfo.data.logradouro,
            zipcode,
            number,
            complement
        }

        return address

    } catch (error: any) {
       console.log("Algum error na requisição, verifique o log", error)
        return null
    }
}