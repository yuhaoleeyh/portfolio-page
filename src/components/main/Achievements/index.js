import React from "react";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import "./css/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faClock,
  faHandsHelping,
  faLayerGroup,
  faFileInvoiceDollar,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import goldmansachs from './img/Goldman_Sachs.png'
import tiktok from './img/tiktok.png'
import govtech from './img/govtech.png'
import shopee from './img/shopee.png'
import gic from './img/gic.png'
import acepointer from './img/acepointer.png'


const Achievements = () => {
  return (
    <div>

      <div>

      <Container className="bottom-break">
        <div className="text-center resume-break">
          <h3>WORK EXPERIENCE</h3>
          <hr />
          <h4>Worked at some of the top tech and finance companies all over the world</h4>
        </div>
        <Row>
            <Col className = "text-center logo" md = {2} xs = {12}>
                <Image src = {goldmansachs} height = {120} width = {120}></Image>
            </Col>
            <Col className = "text-center logo" md = {2} xs = {12}>
            <Image src = {tiktok} height = {120} width = {160}></Image>
            </Col>
            <Col className = "text-center logo" md = {2} xs = {12}>
            <Image src = {shopee} height = {120} width = {90}></Image>
            </Col>
            <Col className = "text-center logo" md = {2} xs = {12}>
            <Image src = {gic} height = {120} width = {120}></Image>
            </Col>
            <Col className = "text-center logo" md = {2} xs = {12}>
            <Image src = {govtech} height = {120} width = {120}></Image>
            </Col>
            <Col className = "text-center logo" md = {2} xs = {12}>
            <Image src = {acepointer} height = {120} width = {120}></Image>
            </Col>
        </Row>
        <Row>
            
        </Row>
        <Row className="resume-break text-center">
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="circle text-center">
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
              </div>
              <b className = "text-center">Software/Data Engineer (Summer Analyst) at Goldman Sachs</b>
              <p>
                Global Banking and Markets, Synthetic Product Group Equities            
              </p>
              <p>
                Development of systems and algorithms to improve workflows and profits for front office traders and clients
              </p>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <div className="circle text-center">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <b className = "text-center">Backend Engineer Intern at TikTok </b>
              <p>
              Trust and Safety Engineering - Risk Management Platform (Backend)
              </p>

              <p>
              Implementation and fine tuning of machine learning models to fight fraud and abuse of NUV (new user vouchers) on the Shopee app. 

              </p>

            </ScrollAnimation>
          </Col>
        </Row>
        <Row className="resume-break">
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay = {600}>
              <div className="circle text-center">
                <FontAwesomeIcon icon={faFileCode} />
              </div>
              <b className = "text-center">Cloud DevOps Intern at GovTech</b>
              <p>
                Engineering Productivity Team - Government Digital Services (GDS)              
              </p>
              <p>
              Implementation of automated cloud service outage notification systems to improve productivity in government agencies
              </p>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={900}>
              <div className="circle text-center">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <b className = "text-center">Data Science Intern at Shopee </b>
              <p>
              Anti-Fraud Department - Regional Engineering, Data Science Team
              </p>

              <p>
              Implementation and fine tuning of machine learning models to fight fraud and abuse of NUV (new user vouchers) on the Shopee app. 

              </p>

            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce={true}>
              <div className="circle text-center">
                <FontAwesomeIcon icon={faHandsHelping} />
              </div>
              <b className = "text-center">Software Engineering Intern at GIC</b>
              <p>
              Fixed Income Department - Systematic Investments Group (Quant Strategist)
              </p>
              <p>
              Development of in house investment workflow engine that stores and executes real-time trades
              </p>
            </ScrollAnimation>
          </Col>
          <Col xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" delay={900} animateOnce={true}>
              <div className="circle text-center">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <b className = "text-center">Software Engineering Intern at Ace Pointer</b>
              <p>

              Special Projects Department              
              </p>
              <p>
              Development of full fledged front/backend solutions for clients’ product requirements
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <div>
        <div className="text-center">
          <h3 className="resume-break">MY ACHIEVEMENTS</h3>
          <Container className="bottom-break word">
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <hr />
                <Tabs
                  defaultActiveKey="awards"
                  id="justify-tab-example"
                  className="mb-3"
                  fill
                  variant="pills"
                >
                  <Tab eventKey="awards" title="Awards">
                    <div className="bottom-break">
                    <b>Overall</b>
                      <div>
                        Computer Science Dean's List for 3 consecutive years (AY20/21, AY21/22, AY22/23)
                      </div>
                      <p></p>
                      <b>2021</b>
                      <div>
                        3rd Place for the Ellipsis Goldman Sachs AWS Hackathon
                        2021
                      </div>
                      <div>
                        1st place and Dentons Rodyk Access to Justice Award for
                        SMU Legal Innovation and Technology Hackathon 2021
                      </div>
                      <p></p>
                      <b>2020</b>
                      <div>
                        Best College Hack for the International Hack-A-Solution
                        Hackathon 2020 among 213 participants
                      </div>
                      <div>
                        2nd runner-up for Pythonic Heicoders Academy Contest
                        2020
                      </div>
                      <div>
                        Global Top 50 Finish at BitByteGo CodeChef Competition
                        2020
                      </div>
                      <div>
                        Top 20% of global participants in Google KickStart Round
                        D 2020
                      </div>
                      <div>
                        3* Competitive Programmer in CodeChef (Peak rating of
                        1708)
                      </div>
                      <div>SMU Global Impact Scholarship (2020 - 2024) (Top 40 Students)</div>
                      <p></p>
                      <b>Before 2020</b>
                      <div>
                        ACT Score of 34 (Top 1% of all test-takers, Dec 2017)
                      </div>
                      <div>
                        Singapore Chemistry Olympiad 2016 (Gold Award, Top 19,
                        Selected into National Team Training)
                      </div>
                      <div>MOE-NUS Amazing Lab Race 2015 (1st runner up)</div>
                      <div>
                        International C.B. Paul Science Quiz 2015 (Gold Award)
                      </div>
                      <div>
                        Singapore Junior Physics Olympiad (Silver Award)
                      </div>
                      <div>
                        Zong Xiang Bei Chinese Chess Tournament 2014 (13th in
                        Singapore)
                      </div>
                      <div>
                        Singapore Mathematical Olympiad 2013 (Gold Award,
                        Selected into National Junior Team Training)
                      </div>
                      <p></p>
                      <div>
                        Represented Singapore in the Po Leung Kuk Primary Mathematics World Contest at the age of 12
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="certifications" title="Certifications">
                  <div className="bottom-break">
                  <b>2021 - 2022</b>
                    <div>AWS Certified Solutions Architect (Associate) </div>
                    <p></p>
                    <div>AWS Certified Cloud Practitioner </div>
                    <p></p>

                    <div>Oracle Certified Foundations Associate, Java</div>
                    <p></p>
                    <b>2020</b>
                    <div>
                        AI 200: Applied Machine Learning (Heicoders)
                    </div>
                    <p></p>
                    <div>
                        Git Essential Training: The Basics Course (Linkedln)
                    </div>
                    <p></p>
                    <div>
                        Programming Fundamentals: Duke University (Coursera)
                    </div>
                    <p></p>
                    <div>AWS Machine Learning (Coursera)</div>
                    <p></p>
                    <div>DevOps Foundations (Linkedln)</div>
                    <p></p>
                    </div>
                  </Tab>
                  <Tab eventKey="projects" title="Projects">
                  <div className="bottom-break">
                    <div>
                        <b>
                        3rd Place for Ellipsis Goldman Sachs AWS Hackathon (App:
                        DayZero)
                        </b>
                        <p>
                        An AI financial application that utilise deep learning and
                        AWS cloud with optimised recommenders to assist any user
                        in their financial journey
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/yuhaoleeyh/day-zero">
                        Github Link{" "}
                        </a>
                    </div>
                    <div className="padding-top">
                        <b>Champions of LIT Hackathon (App: LowerTheBar)</b>
                        <p>
                        An application utilising speech recognition, deep learning
                        and augmented reality to increase the needy's access to
                        suitable lawyers
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/yuhaoleeyh/lower-the-bar">
                        Github Link{" "}
                        </a>
                    </div>
                    <div className="padding-top">
                        <b>
                        Analysis of Stock Price Predictions using LSTM models{" "}
                        </b>
                        <p>
                        Utilised feature engineering, hyperparameter tuning,
                        neural layer manipulation and stacking to optimise models
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/yuhaoleeyh/stock-project">
                        Github Link{" "}
                        </a>
                        <p></p>
                        <a href="https://medium.com/analytics-vidhya/analysis-of-stock-price-predictions-using-lstm-models-f993faa524c4">
                        Medium Link{" "}
                        </a>
                    </div>
                    <div className="padding-top">
                        <b>Multi-class code language classifier </b>
                        <p>
                        Employed ensemble learning models such as RandomForest and
                        CatBoost, as well as deep learning models like LSTM models
                        to obtain an accuracy of 0.988 through KFold Cross
                        Validation
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/yuhaoleeyh/github-DAP">
                        Github Link{" "}
                        </a>
                        <p></p>
                        <a href="https://yuhao-lee.medium.com/the-dap-journey-multi-programming-language-classifier-c60ab181334">
                        Medium Link{" "}
                        </a>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="leadership" title="Leadership/Co-curricular">
                  <div className="bottom-break">
                  <div className="padding-top">
                    <b>Data Associate Program </b>
                    <p>
                    Mentored a group of 4 students on aspect based sentiment analysis
                    </p>
                    </div>
                    <div className="padding-top">
                    <b>SMU Business Intelligence and Analytics </b>
                    <p>
                    Curriculum Director, in charge of mentoring and giving more than 100 students workshops on machine learning and technical knowledge
                    </p>
                    </div>
                    <div className="padding-top">
                    <b>SMU ACE Programme </b>
                    <p>
                    Ambassador/Speaker at school outreach events
                    </p>
                    </div>
                    <div className="padding-top">
                    <b>Vikasa Overseas Community Service Project, India </b>
                    <p>
                    Part of the Educational committee, gave India students Math and English lessons twice a week
                    </p>
                    </div>
                  </div>
                </Tab>
                </Tabs>
                
              </Col>
            </Row>
          </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;