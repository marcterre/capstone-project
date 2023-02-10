import { List, ListItem, StyledLink } from "./StyledComponents";
import SvgIcon from "./SvgIcon";

export default function ViewItem({ views, currentProject }) {
  const viewSideIcons = [
    { name: "none", svg: <SvgIcon variant="circleMedium" /> },
    { name: "front", svg: <SvgIcon variant="frontSide" width="50px" /> },
    { name: "back", svg: <SvgIcon variant="backSide" /> },
    { name: "left", svg: <SvgIcon variant="leftSide" /> },
    { name: "right", svg: <SvgIcon variant="rightSide" /> },
    { name: "top", svg: <SvgIcon variant="topSide" /> },
    { name: "bottom", svg: <SvgIcon variant="bottomSide" /> },
    { name: "cut", svg: <SvgIcon variant="scissor" /> },
    { name: "detail", svg: <SvgIcon variant="magnifier" /> },
    { name: "other", svg: <SvgIcon variant="star" /> },
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
