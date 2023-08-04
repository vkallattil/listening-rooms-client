import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Text from "../../_base/Text";
import { useSocket } from "../../SocketProvider";

function IndexPage() {
  const { changeRoom, currentSocket } = useSocket();

  useEffect(() => {
    currentSocket && changeRoom("");
  }, [currentSocket]);

  return <Text type="h1">Select a room</Text>;
}

export default IndexPage;
