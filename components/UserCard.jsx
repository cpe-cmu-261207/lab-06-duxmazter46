import React,{ useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "../components/UserCardDetail";

function UserCard(props) {
  const { user } = props;
  const [showed, setShowed] = useState(false);

  return (
    <div className="border-bottom" onLoad={() => setShowed(false)}>
      <div
        className="d-flex align-items-center p-3"
        onClick={() => (showed ? setShowed(false) : setShowed(true))}
      >
        <img src={user.image} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{user.name}</span>
        {showed ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {showed ? <UserCardDetail user={user} /> : ""}
    </div>
  );
}

export default UserCard;