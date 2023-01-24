import styled from "styled-components";
import Link from "next/link";

export default function ViewItem({ views }) {
  return (
    <List>
      {views.map((view) => (
        <ListItem key={view.id}>
          <Link href={`/project-details/view-details/${view.slug}`}>
            {view.name}
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
