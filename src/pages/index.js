import About from '../../componnent/home/About';
import Banner from '../../componnent/home/Banner';
import Causes from '../../componnent/home/Causes';
import Event from '../../componnent/home/Event';
import MeetVolainter from '../../componnent/home/MeetVolainter';
import VolantireMakter from '../../componnent/home/VolantireMakter';

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <VolantireMakter />
      <Causes />
      <MeetVolainter />
      <Event />
    </div>
  )
}
