import { Heading } from '../../components/Heading';
import * as Styled from './styles';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';

function Home() {
  return <Base {...mockBase}></Base>;
}

export default Home;
