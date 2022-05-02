import { AdviceType } from "@components/tampletes/app/types";
import { BASE_API_URL } from "@constants/endpoint";
import axios from "axios";

export async function getNewAdvice(): Promise<AdviceType> {
  try {
    type AdviceResponse = {
      slip: AdviceType
    }
    const response = await axios.get<AdviceResponse>(BASE_API_URL)

    return response.data.slip
  } catch (error) {
    throw new Error('Something wrong!')
  }

}