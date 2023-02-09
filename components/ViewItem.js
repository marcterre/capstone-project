import styled, { css } from "styled-components";
import Link from "next/link";
import FrontSideIcon from "@/public/icons/front-side.svg";
import BackSideIcon from "@/public/icons/back-side.svg";
import RightSideIcon from "@/public/icons/right-side.svg";
import LeftSideIcon from "@/public/icons/left-side.svg";
import TopSideIcon from "@/public/icons/top-side.svg";
import BottomSideIcon from "@/public/icons/bottom-side.svg";
import ScissorIcon from "@/public/icons/scissors.svg";
import MagnifierIcon from "@/public/icons/magnifier.svg";
import CircleMediumIcon from "@/public/icons/circle-medium.svg";
import StarIcon from "@/public/icons/star.svg";
import { StyledList } from "./StyledComponents/StyledList";

export default function ViewItem({ views, currentProject }) {
  const viewSideIcons = [
    { name: "none", svg: <CircleMediumIcon /> },
    { name: "front", svg: <FrontSideIcon /> },
    { name: "back", svg: <BackSideIcon /> },
    { name: "left", svg: <LeftSideIcon /> },
    { name: "right", svg: <RightSideIcon /> },
    { name: "top", svg: <TopSideIcon /> },
    { name: "bottom", svg: <BottomSideIcon /> },
    { name: "cut", svg: <ScissorIcon /> },
    { name: "detail", svg: <MagnifierIcon /> },
    { name: "other", svg: <StarIcon /> },
  ];
  return (
    <StyledList variant="views-outermost">
      {views.map((view) => (
        <ListItem key={view.id}>
          <StyledLink
            href={`/project-details/${currentProject.id}/view-details/${view.id}`}
          >
            <StyledList variant="viewListItem">
              <StyledList>
                {viewSideIcons.map(
                  (icon) =>
                    icon.name === view.viewSide && (
                      <SvgListItem key={icon.name}>{icon.svg}</SvgListItem>
                    )
                )}
              </StyledList>
              <StyledList> {view.name}</StyledList>
            </StyledList>
          </StyledLink>
        </ListItem>
      ))}
    </StyledList>
  );
}

const SvgListItem = styled.li`
  width: 2em;
  height: 2em;
`;

const ListItem = styled.li`
  padding: 1.5em 0;
  justify-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
