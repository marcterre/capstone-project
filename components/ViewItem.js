import styled from "styled-components";
import Link from "next/link";

export default function ViewItem({ views, currentProject }) {
  return (
    <List>
      {views.map(({ name, viewId }) => (
        <ListItem key={viewId}>
          <StyledLink
            href={`/project-details/${currentProject.id}/view-details/${viewId}`}
          >
            <Wrapper>{name}</Wrapper>
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
  padding: 0;
  justify-self: center;
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
`;
