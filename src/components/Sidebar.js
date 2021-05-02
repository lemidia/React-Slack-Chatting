import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SidebarContainer>
      <SidebarHeader />

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="file browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />

      <hr />

      <SidebarOption Icon={ExpandMore} title="Channels"></SidebarOption>
      <hr />
      <SidebarOption
        Icon={Add}
        addChannelOption
        title="Add Channels"
      ></SidebarOption>

      {channels?.docs.map((doc) => (
        <SidebarOption
          id={doc.id}
          key={doc.id}
          title={doc.data().name}
        ></SidebarOption>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 7px;
    margin-bottom: 7px;
    border: 1px solid #552f57;
  }
`;
