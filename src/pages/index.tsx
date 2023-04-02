import { Inter } from 'next/font/google';
import {Headers, Rating, Tag} from "../components";
import {Button} from "../components";
import {Paragraph} from "../components";

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <main >
          <Headers tag='h1'>Текст</Headers>
          <Rating rating={4}/>
          <Button appearance={'primary'} arrow='none'>Узнать подробнее</Button>
          <Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
          <Paragraph size='small'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Paragraph>
          <Paragraph size='medium'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
          <Paragraph size='large'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Paragraph>
          <Tag size={'small'} color={"green"}>Маленький зеленый</Tag>
          <Tag size={'medium'} color={"red"}>Средний красный</Tag>
          <Tag size={'small'} color={"primary"}>Primary small</Tag>
          <Tag size={'medium'} color={"ghost"}>Medium ghost</Tag>
      </main>
    </>
  )
}
