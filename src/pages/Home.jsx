import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getFeedsApi } from "../store/feed/feed.action";


const Home = () => {
  const dispatch = useDispatch();
  const { data, getFeeds } = useSelector((state)=>state.feed)
  console.log(data);
  useEffect(() => {
    if(data.length===0){
      dispatch(getFeedsApi());
    }
    
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeeds.loading && <div>loading.....</div>}
      {getFeeds.error && <div>error.....</div>}
      {!getFeeds.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "200px",
            }}
          >
            <div>{feed.title}</div>
            <div>{feed.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
