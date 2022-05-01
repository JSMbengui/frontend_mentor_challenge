import { GetServerSideProps, NextPage } from "next"

import App from "@components/tampletes/app"
import { AppProps } from "@components/tampletes/app/types"

import { getNewAdvice } from "@helpers/get_new_advice"

const AppPage: NextPage<AppProps> = ({ advice }) => <App advice={advice} />

export default AppPage

export const getServerSideProps: GetServerSideProps<AppProps> = async () => {
  const newAdvice = await getNewAdvice()

  return {
    props: {
      advice: newAdvice
    }
  }
}