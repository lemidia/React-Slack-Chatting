import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
function SidebarHeader() {
  const [user] = useAuthState(auth);

  return (
    <SidebarHeaderContainer>
      <SidebarInfo>
        <h2>Our Slack</h2>
        <h3>
          <FiberManualRecord />
          {user?.displayName}
        </h3>
      </SidebarInfo>
      <Create />
    </SidebarHeaderContainer>
  );
}

export default SidebarHeader;

const SidebarHeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #49264b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49264b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 900;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: #39a839;
  }
`;
