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
import { List, ListItem, StyledLink } from "./StyledComponents";

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
    <List variant="outermost">
      {views.map((view) => (
        <ListItem key={view.id} variant="mainListItem">
          <StyledLink
            href={`/project-details/${currentProject.id}/view-details/${view.id}`}
          >
            <List variant="viewSublist">
              <List variant="listItem">
                {viewSideIcons.map(
                  (icon) =>
                    icon.name === view.viewSide && (
                      <ListItem variant="icon" key={icon.name}>
                        {icon.svg}
                      </ListItem>
                    )
                )}
              </List>
              <List> {view.name}</List>
            </List>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}
