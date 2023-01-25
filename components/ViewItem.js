import styled from "styled-components";
import Link from "next/link";

export default function ViewItem({ views, currentProject }) {
  return (
    <List>
      {views.map(({ id, name, viewSlug }) => (
        <ListItem key={id}>
          <Link
            href={`/project-details/${currentProject.slug}/view-details/${viewSlug}`}
          >
            <div>{name}</div>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0px;
  align-content: center;
  text-align: center;
  gap: 10px;
  margin-top: 20px;
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: lightgrey;
`;
