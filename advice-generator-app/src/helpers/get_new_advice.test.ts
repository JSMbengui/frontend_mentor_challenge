import { AdviceType } from '@components/tampletes/app/types'
import axios from 'axios'
import { getNewAdvice } from "./get_new_advice"

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('GetNewAdvice', () => {
  it('Should return the correct value whem request successed', async () => {
    const adviceResponse = {
      slip: { id: 1, title: "title" }
    }

    mockedAxios.get.mockResolvedValue({
      data: adviceResponse,
    })

    const data = await getNewAdvice()

    expect(data.id).toBe(1)
    expect(data.title).toBe("title")
  })
  it('Should return the correct value whem request fail', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Something wrong!'))

    await expect(getNewAdvice()).rejects.toThrow("Something wrong!")
  })
})