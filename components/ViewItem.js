import styled from "styled-components";
import Link from "next/link";

// const newArray = views.filter((view) => view);

// console.log(`current project: ${currentProject.id}`);
// console.log(newArray);
export default function ViewItem({ views, currentProject }) {
  return (
    <List>
      {views.map(({ name, viewId }) => (
        <li key={viewId}>
          <StyledLink
            href={`/project-details/${currentProject.id}/view-details/${viewId}`}
          >
            <Wrapper>{name}</Wrapper>
          </StyledLink>
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  text-align: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  padding: 10px;
  background-color: lightgrey;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 40vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* text-overflow: ellipsis;
  overflow: hidden; */
`;
