import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
   <div>
    <Htag tag='h1'>Text</Htag>
    <Button appearance='primary'>Primary</Button>
    <Button appearance='ghost' arrow='right'>Ghost</Button>
   </div> 
  );
}
