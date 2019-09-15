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

const Materials = ({ history }) => (
  <main className="education">
    <Provider>
      <Consumer>
        {({ setActiveTab, activeTab }) => (
          <Fragment>
            <div className="education__background" key={activeTab}>
              <div className="container education__main">
                <TabContent index="0">
                  <h1>COLLECT RECYCLABLE MATERIAL, SAVE THE ENVIRONMENT… AND EARN!</h1>
                  <h3>But first...Education.</h3>
                  <p>The mission of cigbutt movement is to eliminate cigarette butts from the face of the earth and  make better use of recyclable material like bottle caps by recycling them back into reusability, or handing them to charities who recycle the materials and buy wheelchairs for disabled children through the profit. You will be able to turn in plastic waste you used into discount coupons, and cash by delivering it to the nearest allocation point while saving the environment at the same time! But you may ask why the effort?</p>
                </TabContent>
                <TabContent index="1">
                  <h1>Why The Effort?</h1>
                  <p>How is plastic so bad you might ask? and why should I put any effort into helping? The world is as of now creating about 300 million tons of plastic every year. Unfortunately, although plastic is a valuable item, a considerable lot of these items are made for single-use - with an expected 50 percent of plastic utilized once and discarded.
Not only is this harmful to the environment and the oceans, but it is also harmful to wildlife - where it impacts nearly 700 species in the ocean, and humans.  As of now, just nine percent of the world's plastic is reused - an issue in light of the fact that most plastics are not biodegradable and normally take over 400 years to biodegrade. The average time for a plastic bottle to completely degrade is at least 450 years.</p>
                </TabContent>
                <TabContent index="2">
                  <h1>How Can I Help?</h1>
                  <p>Our application will connect you to plastic collection points that will eventually send what they have to recycling service companies like 4Plast,Agraf and ABC System Sp. z oo turning the plastic into reusable forms, further eliminating the need of producing new plastic, and eventually replacing the use of plastic.</p>
                  <h3>What Do I Have To Do?</h3>
                  <p>
All you need to do is collect enough recyclable materials like bottle caps somewhere in a safebox. Once you have enough - around 1.4kg of bottle caps -  Weight of a bottle cap – 2.3g -- 608 bottle caps - you can take the box to the closest collecting location shown on the map, and an employee will scan your user - qr code - ID. You will automatically buttPoints that you can use as discount coupons for companies such as pyszne.pl, uber,hop.city,strefakursow,gog.com,bus tickets and small amounts of cash. This way, you have contributed to saving the environment, and made you some cash!</p>
                </TabContent>
                <TabContent index="3">
                  <h1>Where Am I Supposed To Send The Plastic Waste?</h1>
                  <p>The locations will be shown in your map once you finish the coming fun quiz!</p>
                </TabContent>
                <TabContent index="4">
                  <Quiz questions={quiz.materials} redirect={() => history.push('/education/success')} />
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
  Materials,
};