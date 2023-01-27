import styled from "styled-components";
import Link from "next/link";

export default function ViewItem({ views, currentProject }) {
  return (
    <List>
      {views.map((view) => (
        <ListItem key={view.id}>
          <StyledLink
            href={`/project-details/${currentProject.id}/view-details/${view.id}`}
            onClick={() => console.log(view.id)}
          >
            {view.name}
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin: 0;
  text-align: center;
  gap: 10px;
`;

const ListItem = styled.li`
  padding: 10px;
  justify-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: lightgray;
  padding: 10px 50px;
  overflow: hidden;
  overflow-wrap: break-word;
`;
