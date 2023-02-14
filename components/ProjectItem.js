import styled from "styled-components";
import { List, ListItem, StyledLink } from "./StyledComponents";
import SvgIcon from "./SvgIcon";

export default function ProjectItem({ projects }) {
  const categoryIcons = [
    { name: "none", svg: <SvgIcon variant="circleMedium" /> },
    { name: "woodwork", svg: <SvgIcon variant="saw" /> },
    { name: "metalwork", svg: <SvgIcon variant="anvil" /> },
    { name: "electricity", svg: <SvgIcon variant="lightning" /> },
    { name: "knitting/crocheting", svg: <SvgIcon variant="sheep" /> },
    { name: "stitching", svg: <SvgIcon variant="shirt" /> },
    { name: "other", svg: <SvgIcon variant="star" /> },
  ];

  return (
    <List variant="outermost">
      {projects.map((project) => (
        <ListItem key={project.id} variant="mainListItem">
          <StyledLink href={`/project-details/${project.id}`}>
            <List variant="sublist">
              <List variant="listItem">
                <ListItem variant="name">{project.name}</ListItem>
                {project.categories !== "none" && (
                  <CategoryTitle>{project.categories}</CategoryTitle>
                )}
              </List>
              <List variant="listItem">
                {categoryIcons.map(
                  (icon) =>
                    icon.name === project.categories && (
                      <IconItem
                        key={icon.name}
                        isActive={project.isActive}
                        aria-label={icon.name}
                      >
                        {icon.svg}
                      </IconItem>
                    )
                )}
              </List>
            </List>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}

const ProjectName = styled.li`
  font-weight: 600;
  width: 60vw;
`;

const CategoryTitle = styled.li`
  font-weight: 300;
`;

const IconItem = styled.li`
  width: 1.5em;
  height: 1.5em;
  fill: ${({ isActive }) =>
    isActive ? "var(--color-project-active)" : "var(--color-project-inactive)"};
`;
