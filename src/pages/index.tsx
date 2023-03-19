import { Inter } from 'next/font/google';
import {Headers} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <main >
          <Headers tag='h2'>Текст</Headers>
      </main>
    </>
  )
}
