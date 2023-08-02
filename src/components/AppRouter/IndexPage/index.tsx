import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Text from "../../_base/Text";
import { useSocket } from "../../SocketProvider";

function IndexPage() {
  const { changeRoom } = useSocket();

  useEffect(() => {
    changeRoom("");
    console.log("changed room");
  }, []);

  return <Text type="h1">Select a room</Text>;
}

export default IndexPage;