import SawIcon from "@/public/icons/saw.svg";
import AnvilIcon from "@/public/icons/anvil.svg";
import StarIcon from "@/public/icons/star.svg";
import LightningIcon from "@/public/icons/lightning.svg";
import SheepIcon from "@/public/icons/sheep.svg";
import ShirtIcon from "@/public/icons/shirt.svg";
import CircleMediumIcon from "@/public/icons/circle-medium.svg";
import styled from "styled-components";
import { List, ListItem, StyledLink } from "./StyledComponents";

export default function ProjectItem({ projects }) {
  const categoryIcons = [
    { name: "none", svg: <CircleMediumIcon /> },
    { name: "woodwork", svg: <SawIcon /> },
    { name: "metalwork", svg: <AnvilIcon /> },
    { name: "electricity", svg: <LightningIcon /> },
    { name: "knitting/crocheting", svg: <SheepIcon /> },
    { name: "stitching", svg: <ShirtIcon /> },
    { name: "other", svg: <StarIcon /> },
  ];

  return (
    <List variant="outermost">
      {projects.map((project) => (
        <ListItem key={project.id} variant="mainListItem">
          <StyledLink href={`/project-details/${project.id}`}>
            <List variant="sublist">
              <List variant="listItem">
                <ProjectName>{project.name}</ProjectName>
                {project.categories !== "none" && (
                  <CategoryTitle>{project.categories}</CategoryTitle>
                )}
              </List>
              <List variant="listItem">
                {categoryIcons.map(
                  (icon) =>
                    icon.name === project.categories && (
                      <IconItem key={icon.name} isActive={project.isActive}>
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
  width: 2em;
  height: 2em;
  fill: ${({ isActive }) =>
    isActive ? "var(--color-project-active)" : "var(--color-project-inactive)"};
`;
