import styled from "styled-components";
import Link from "next/link";

export default function ViewItem({ views, currentProject }) {
  return (
    <List>
      {views.map((view) => (
        <ListItem key={view.id}>
          <StyledLink
            href={`/project-details/${currentProject.id}/view-details/${view.id}`}
          >
            <Wrapper>{view.name} </Wrapper>
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
`;

const ListItem = styled.li`
  padding: 5px;
  justify-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Wrapper = styled.div`
  background-color: lightgray;
  padding: 10px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 40vw;
`;
