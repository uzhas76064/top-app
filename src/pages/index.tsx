import { Inter } from 'next/font/google';
import {Headers} from "@/components";
import {Button} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <main >
          <Headers tag='h2'>Текст</Headers>
          <Button appearance={'primary'}>Узнать подробнее</Button>
          <Button appearance={'ghost'}>Читать отзывы</Button>
      </main>
    </>
  )
}
