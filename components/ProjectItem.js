import styled from "styled-components";
import Link from "next/link";
import SawIcon from "@/public/icons/saw.svg";
import AnvilIcon from "@/public/icons/anvil.svg";
import StarIcon from "@/public/icons/star.svg";
import LightningIcon from "@/public/icons/lightning.svg";
import SheepIcon from "@/public/icons/sheep.svg";
import ShirtIcon from "@/public/icons/shirt.svg";
import CircleMediumIcon from "@/public/icons/circle-medium.svg";

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
    <LeadingList>
      {projects.map((project) => (
        <ListItem key={project.id}>
          <StyledLink href={`/project-details/${project.id}`}>
            <SubList>
              <List>
                <ProjectName>{project.name}</ProjectName>
                {project.categories !== "none" && (
                  <CategoryTitle>{project.categories}</CategoryTitle>
                )}
              </List>
              <List>
                {categoryIcons.map(
                  (icon) =>
                    icon.name === project.categories && (
                      <IconItem key={icon.name} isActive={project.isActive}>
                        {icon.svg}
                      </IconItem>
                    )
                )}
              </List>
            </SubList>
          </StyledLink>
        </ListItem>
      ))}
    </LeadingList>
  );
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const LeadingList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0.5em;
`;

const ListItem = styled.li`
  margin: 1em 0;
  background-color: var(--color-list-items-white);
  border-radius: 2em;
  box-shadow: var(--box-shadow-darkblue);
`;

const ProjectName = styled.li`
  font-weight: 600;
  width: 60vw;
`;

const CategoryTitle = styled.li`
  font-weight: 300;
`;

const SubList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
`;

const IconItem = styled.li`
  width: 2em;
  height: 2em;
  fill: ${({ isActive }) =>
    isActive ? "var(--color-project-active)" : "var(--color-project-inactive)"};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
