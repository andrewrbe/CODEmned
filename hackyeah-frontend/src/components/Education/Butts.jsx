import React, { Fragment } from 'react';
import { Provider, Consumer, TabContent } from '../common/Tabs';
import where from '../../assets/where.png'
import what from '../../assets/what.png'
import how from '../../assets/how.png'
import why from '../../assets/why.png'
import play from '../../assets/play.png'
import quiz from '../../data/quiz';
import Quiz from './Quiz';
import Thing from './Thing';

const Butts = ({ history }) => (
  <main className="education">
    <Provider>
      <Consumer>
        {({ setActiveTab, activeTab }) => (
          <Fragment>
            <div className="education__background" key={activeTab}>
              <div className="container education__main">
                <TabContent index="0">
                  <h1>COLLECT CIGARETTE BUTTS, SAVE THE ENVIRONMENT… AND EARN!</h1>
                  <h3>But first...Education.</h3>
                  <p>The mission of cigbutt movement is to eliminate cigarette butts from the face of the earth and  make better use of recyclable material. Imagine this: you’re walking down the street in the morning,and you pass by thousands of cigarette butts that harm our beautiful nature and take between 1 month and 15 years to biodegrade! With cigbutt will be able to turn in cigarette butts into discount coupons, and cash by delivering it to the nearest allocation point while saving the environment at the same time! But you may ask why the effort?</p>
                </TabContent>
                <TabContent index="1">
                  <h1>Why The Effort?</h1>
                  <p>Butts left in grass and soil can harm nearby plant growth, according to a new study. The study driven by Anglia Ruskin University in Cambridge, England found that a cigarette butt can chop down the germination, or advancement, of plants, adding to worries about disposed of cigarette leftovers as an under-recognized, yet far reaching, pollutant.Cigarette butts cut down the germination accomplishment of grass by 10% and clover by 27%, and the shoot length by 13% and 28%, separately, as indicated by the investigation, which was distributed in the diary Ecotoxicology and Environmental Safety. Weight of cigarettes littered annually up to 800 000 t ( UNEP)  which makes 84% of all cigarettes produced  internationally and 4,7 trillion butts are littered per year - 150 000 butts are littered per second biggest problem is the filters, most of which are made of cellulose acetate, a kind of plastic. That means the filters don’t readily biodegrade, although they do break down — and send thousands of tiny plastic fibers into the environment, waterways and wildlife. Along with the fibers come chemicals like arsenic, benzene and lead. In 10 years there may be more cigarette butts in the ocean than fish Cigarette.
</p>
                </TabContent>
                <TabContent index="2">
                  <h1>How Can I Help?</h1>
                  <p>Our application will connect you to cigarette filter collection points that will eventually send what they have to recycling service companies like MéGO! (France), turning the filters into industrial-grade raw materials. In Vancouver, where people litter a million cigarette butts a day, was the first city to pioneer this partnership with such a company -  TerraCycle - , installing 110 cigarette butt recycling bins in its downtown area in 2013.
</p>
                  <h3>What Do I Have To Do?</h3>
                  <p>
                  All you need to do is  Move the cooled cigarette to a sturdy plastic bag that you can seal. Once you have enough - around 100 grams -  Weight of cigarette butt – 0,17 g -  -- 588 cigarette butts --you can take the bag to the closest collecting location shown on the map, and an employee will scan your user - qr code - ID. You will automatically receive buttPoints that you can use as discount coupons for companies such as pyszne.pl, uber ,hop.city ,strefakursow ,gog.com ,bus tickets and small amounts of cash. This way, you have contributed to saving the environment, and made you some goodies :)!</p>
                </TabContent>
                <TabContent index="3">
                  <h1>Where Am I Supposed To Send The Cigarette Butts?</h1>
                  <p>The locations will be shown in your map once you finish the coming fun quiz!</p>
                </TabContent>
                <TabContent index="4">
                  <Quiz questions={quiz.butts} redirect={() => history.push('/education/success')} />
                </TabContent>
              </div>

              <div className="tabs__background">
                <div className="container">
                  {activeTab !== 4 && <button className="next" onClick={() => setActiveTab(activeTab + 1)}>Next</button>}
                  <div className="tabs__nav">
                    <div className={`tabs__nav-item ${activeTab === 0 ? 'tabs__nav-item--active' : ''}`} onClick={() => setActiveTab(0)}>
                      <Thing><img alt="" src={what}/></Thing>
                      <h6>What</h6>
                    </div>
                    <div className={`tabs__nav-item ${activeTab === 1 ? 'tabs__nav-item--active' : ''}`} onClick={() => setActiveTab(1)}>
                      <Thing><img alt="" src={why}/></Thing>
                      <h6>Why?</h6>
                    </div>
                    <div className={`tabs__nav-item ${activeTab === 2 ? 'tabs__nav-item--active' : ''}`} onClick={() => setActiveTab(2)}>
                      <Thing><img alt="" src={how}/></Thing>
                      <h6>How?</h6>
                    </div>
                    <div className={`tabs__nav-item ${activeTab === 3 ? 'tabs__nav-item--active' : ''}`} onClick={() => setActiveTab(3)}>
                      <Thing><img alt="" src={where}/></Thing>
                      <h6>Where?</h6>
                    </div>
                    <div className={`tabs__nav-item ${activeTab === 4 ? 'tabs__nav-item--active' : ''}`} onClick={() => setActiveTab(4)}>
                      <Thing big><img alt="" src={play}/></Thing>
                      <h5>GO QUIZ!</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Consumer>
    </Provider>
  </main>
);

export {
  Butts,
};