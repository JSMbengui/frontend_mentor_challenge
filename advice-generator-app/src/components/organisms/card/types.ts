import { AdviceType } from "@components/tampletes/app/types"

export type CardProps = {
  advice: AdviceType
  getNextAdvice: () => Promise<void>
}