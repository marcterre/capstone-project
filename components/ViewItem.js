import styled from "styled-components";
import Link from "next/link";

// const newArray = views.filter((view) => view);

// console.log(`current project: ${currentProject.id}`);
// console.log(newArray);
export default function ViewItem({ views, currentProject }) {
  return (
    <List>
      {views.map(({ name, viewId }) => (
        <ListItem key={viewId}>
          <Link
            href={`/project-details/${currentProject.id}/view-details/${viewId}`}
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
  padding: 0;
  align-content: center;
  text-align: center;
  gap: 10px;
  margin-top: 20px;
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: lightgrey;
`;
