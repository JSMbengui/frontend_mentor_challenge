import { AdviceType } from "@components/tampletes/app/types";
import { BASE_API_URL } from "@constants/endpoint";
import axios from "axios";

export async function getNewAdvice(): Promise<AdviceType> {
  try {
    const response = await axios.get<AdviceType>(BASE_API_URL)

    return response.data
  } catch (error) {
    throw new Error('Something wrong!')
  }

}