import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

export default function BMachines() {

  return (
    <MDBAccordion className="accord" flush initialActive={1}>
      <h1 className="moveLeft text-white">Recommended coffee brewing machines:</h1>
      <MDBAccordionItem  collapseId={1} headerTitle='Espresso Machine'>
        <div className="okay1">
          <a href="https://www.amazon.ca/dp/B00CH9QWOU?ots=1&ascsubtag=[artid%7C10055.g.29069348[src%7C[ch%7C[lt%7C&linkCode=gg2&tag=goodhousekeeping_auto-append-20" target="_blank" ><img className="machines" border="0" src="https://m.media-amazon.com/images/I/81jwrgyJDXL._AC_SL1500_.jpg" /></a>
        <h1 className="okay2">Breville Espresso Machine</h1>
        </div>
        <p><strong>Your coffee rituals</strong>, done right.
        From espresso to drip, find your new coffee routine machine.</p>
        <p>An espresso machine gives you the chance to be the barista and afford your grind the care it deserves. If you're curious about espresso machines </p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Brewing Device'>
        <div className="okay1">
        <a href="https://www.amazon.ca/Bodum-11571-109-Coffee-Permanent-Filter/dp/B01JLY1HSE/ref=sr_1_6?keywords=filter%2Bcoffee%2Bmaker&qid=1656577012&sprefix=filter%2Bcoffee%2Caps%2C79&sr=8-6&th=1" target="_blank" ><img className="machines" border="0" src="https://m.media-amazon.com/images/I/61GR+XZqvOL._AC_SL1200_.jpg" /></a>
        <h1 className="okay2">test one two three</h1>
        </div>
        <p><strong>Your coffee rituals</strong>, done right.</p>
        <p>This process is slower than making an espresso, but it will be worth the effort!</p>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Moka Pot'>
        <div className="okay1">
        <a href="https://www.amazon.ca/GROSCHE-Milano-Stovetop-Espresso-Coffee/dp/B017DOT5EW/ref=sr_1_6?crid=1OHDYX46M4UNF&keywords=moka+pot&qid=1656577074&sprefix=moka%2Caps%2C120&sr=8-6" target="_blank" ><img className="machines" border="0" src="https://s3.wasabisys.com/grosche-live/2020/05/milano-black-12-cup.jpg" /></a>
        <h1 className="okay2">test one two three</h1>
        </div>
        <p><strong>Your coffee rituals</strong>, done right.</p>
        <p>the coffee that Moka pots brew is strong and about as close as you can get to espresso without owning an actual espresso machine! So definitely a good pick if you can't afford the standard espresso machine.</p>

      </MDBAccordionItem>
    </MDBAccordion>
  );
}