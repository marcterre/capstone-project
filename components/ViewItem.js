import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ViewItem({ views, currentProject }) {
  console.log(views);

  const router = useRouter();

  const [filteredViews] = views.filter(({ viewSlug }) =>
    viewSlug.includes(currentProject.name)
  );

  console.log(filteredViews);

  return (
    <List>
      {views.map(({ id, name, viewSlug }) => (
        <ListItem key={id}>
          <Link
            href={`/project-details/${currentProject.slug}/view-details/${viewSlug}`}
          >
            {name}
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
