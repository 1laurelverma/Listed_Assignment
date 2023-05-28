import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import axios from "axios";

const BarGraph = () => {
  const apiUrl = `https://api.coinlore.net/api/coin/markets/?id=90`;
  const [ApiData, setApiData] = useState([]);

  // const fetchInfo = async () => {
  //   const res = await axios.get(apiUrl);
  //   setApiData(res.data);
  //   console.log(ApiData);
  // };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setApiData(response.data))
      .catch((err) => console.log(err));

    // fetchInfo();
  }, []);

  return (
    <div className="Graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={ApiData.slice(0, 10)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" width={0} />
          <YAxis />

          <Line type="monotone" dataKey="price" stroke="#9BDD7C" dot={false} strokeWidth={3} />
          <Line type="monotone" dataKey="volume" stroke="#E9A0A0" dot={false} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
