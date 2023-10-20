import { useState } from 'react';
import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={'My Heading'} />
      <Section title={'Section Title'} >My<br />Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={['item 1', 'item 2', 'item 3']} render={(item: string) => <span className='gold'>{item}</span>} />
    </>
  )
}

export default App
