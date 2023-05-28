import React from "react";
import NotificationIcon from "../../assets/NotificationIcon.svg";
import ProfileIcon from "../../assets/ProfileIcon.svg";
import CardsIcon1 from "../../assets/CardsIcon1.svg";
import CardsIcon2 from "../../assets/CardsIcon2.svg";
import CardsIcon3 from "../../assets/CardsIcon3.svg";
import CardsIcon4 from "../../assets/CardsIcon4.svg";
import SettingIcon from "../../assets/setting_icon.png";
import UserIcon from "../../assets/user_icon.png";
import ScheduleIcon from "../../assets/schedule_icon.png";
import TransacionIcon from "../../assets/transaction_icon.png";
import DashboardIcon from "../../assets/dashboard_icon.png";
import Graph from "../../components/BarGraph";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Cell, PieChart, Pie, ResponsiveContainer } from "recharts";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
  const data01 = [
    { name: "Basics Tees", value: 450 },
    { name: "Custom Pants", value: 300 },
    { name: "Super Hoodies", value: 110 },
  ];

  data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />);

  var TotalSum = 0;

  data01.map((data, index) => (TotalSum = TotalSum + parseInt(data.value)));

  TotalSum = parseInt(TotalSum);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const Meetinglistdata = [
    {
      title: "Meeting with suppliers from Kuta Bali",
      timing: "14:00 - 15:00",
      venue: "at Sunset Road, Kuta, Bali",
    },
    {
      title: "Check operation at Giga Factory 1",
      timing: "18:00 - 20:00",
      venue: "at Central Jakarta ",
    },
  ];

  return (
    <>
      <div className="NavbarContainer">
        <div className="sidebarOuter">
          <div className="sidebar">
            <p className="sidebarHeading">Board.</p>
            <div className="listitems">
              <ul>
                <li>
                  <img
                    src={DashboardIcon}
                    alt="dash"
                    style={{ marginRight: "5%" }}
                    width="18px"
                  ></img>
                  Dashboard
                </li>
                <li>
                  <img
                    src={TransacionIcon}
                    alt="dash"
                    style={{ marginRight: "5%" }}
                    width="18px"
                  ></img>
                  Transactions
                </li>
                <li>
                  <img
                    src={ScheduleIcon}
                    alt="dash"
                    style={{ marginRight: "5%" }}
                    width="18px"
                  ></img>
                  Schedules
                </li>
                <li>
                  <img src={UserIcon} alt="dash" style={{ marginRight: "5%" }} width="18px"></img>
                  Users
                </li>
                <li>
                  <img
                    src={SettingIcon}
                    alt="dash"
                    style={{ marginRight: "5%" }}
                    width="18px"
                  ></img>
                  Settings
                </li>
              </ul>
            </div>
            <div className="bottomTag">
              <ul>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Rightdivouter">
          <div className="Navbar">
            <h1 className="NavBarHeading">Dashboard</h1>
            <div className="NavbarRight">
              <div className="flex bg-cardbg dark:bg-cardbgdark rounded-md min-w-fit md:text-base text-xs">
                <div className="SearchBar">
                  <input
                    className="bg-cardbg min-w-fit px-2 py-1 "
                    placeholder="Search by name/address"
                    value="Search..."
                    readOnly
                  />
                </div>
              </div>
              <img
                className="NotificationIcon"
                src={NotificationIcon}
                alt="notification"
                height="20px"
                width="20px"
              />
              <Dropdown style={{ marginLeft: "20px" }}>
                <Dropdown.Toggle style={{ padding: "0px" }}>
                  <img
                    className="ProfileIcon"
                    src={ProfileIcon}
                    alt="profile"
                    height="30px"
                    width="30px"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="CardsContainer">
            <div className="Card" style={{ backgroundColor: "#DDEFE0" }}>
              <img className="CardIcon" src={CardsIcon1} alt="icon" />
              <div className="CardDetail">
                <p className="CardHeading">Total Revenues </p>
                <p className="CardSubHeading">$2,129,430</p>
              </div>
            </div>
            <div className="Card" style={{ backgroundColor: "#F4ECDD" }}>
              <img className="CardIcon" src={CardsIcon2} alt="icon" />
              <div className="CardDetail">
                <p className="CardHeading">Total Transactions</p>
                <p className="CardSubHeading">1,520</p>
              </div>
            </div>
            <div className="Card" style={{ backgroundColor: "#EFDADA" }}>
              <img className="CardIcon" src={CardsIcon3} alt="icon" />
              <div className="CardDetail">
                <p className="CardHeading">Total Likes</p>
                <h4 className="CardSubHeading">9,721</h4>
              </div>
            </div>
            <div className="Card" style={{ backgroundColor: "#DEE0EF" }}>
              <img className="CardIcon" src={CardsIcon4} alt="icon" />
              <div className="CardDetail">
                <p className="CardHeading">Total Users</p>
                <h4 className="CardSubHeading">892</h4>
              </div>
            </div>
          </div>

          <div className="GraphContainer">
            <div className="GraphDetails">
              <div className="GraphTime">
                <p className="BarGraphHeading">Activities</p>
                <p>May-June 2021 ^</p>
              </div>
              <div className="GraphLegend">
                <div className="Legend">
                  <div
                    className="Circle"
                    style={{
                      backgroundColor: "#E9A0A0",
                    }}
                  ></div>
                  <p>Guest</p>
                </div>
                <div className="Legend">
                  <div
                    className="Circle"
                    style={{
                      backgroundColor: "#9BDD7C",
                    }}
                  ></div>
                  <p>User</p>
                </div>
              </div>
            </div>

            <Graph />
          </div>

          <div className="DetailsContainer">
            <div className="ProductsCard">
              <div className="ProductDetail">
                <h1 className="ProductHeading">Top products</h1>
                <p className="ProductTime">May - June 2021</p>
              </div>
              <div className="PieGraphContainer">
                <div className="PieGraph">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data01}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data01.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="PieGraphLegend">
                  <div className="PieGraphListOuter">
                    {data01.map((data, index) => (
                      <div className="PieGraphList" key={index}>
                        <span
                          className="Dot"
                          style={{ backgroundColor: `${COLORS[index]}` }}
                        ></span>
                        <div style={{ marginLeft: "5px" }}>
                          <p className="PieGraphListHeading">{data.name}</p>
                          <p className="PieGraphListSubHeading">
                            {parseInt((parseInt(data.value) * 100) / TotalSum)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ScheduleCard">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "25px",
                }}
              >
                <p className="ScheduleCardHeading">Today's Schedule</p>
                <p className="ViewAll">See All </p>
              </div>
              <div className="MeetingOuter">
                {Meetinglistdata.map((list, index) => {
                  return (
                    <div className="MeetingList" key={index}>
                      <div className="vl"></div>
                      <div>
                        <p className="MeetingTitle">{list.title}</p>
                        <p className="MeetTiming">{list.timing}</p>
                        <p className="MeetVenue">{list.venue}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
