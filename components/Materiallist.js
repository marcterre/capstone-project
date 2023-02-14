import styled from "styled-components";
import SwipeToDeleteItem from "./SwipeToDelete";
import MaterialListForm from "./MaterialListForm";
import { List } from "./StyledComponents";

export default function MaterialList({
  addNewMaterial,
  currentEntry,
  handleMateriallistDelete,
}) {
  return (
    <>
      <MaterialListForm addNewMaterial={addNewMaterial} />
      <StyledList>
        {currentEntry.dimensions.map((dimension) => (
          <li key={dimension.id}>
            <SwipeToDeleteItem
              handleMateriallistDelete={() =>
                handleMateriallistDelete(dimension.id)
              }
            >
              <Table>
                <thead>
                  <tr>
                    <TableHeading>p</TableHeading>
                    <TableHeading>w</TableHeading>
                    <TableHeading>h</TableHeading>
                    <TableHeading>d</TableHeading>
                    <TableHeading>unit</TableHeading>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {dimension.numberOfPieces
                        ? `${dimension.numberOfPieces}x`
                        : "-"}
                    </td>
                    <td>{dimension.width ? dimension.width : "-"}</td>
                    <td>{dimension.height ? dimension.height : "-"}</td>
                    <td>{dimension.depth ? dimension.depth : "-"}</td>
                    <td>{dimension.unit ? dimension.unit : "-"}</td>
                  </tr>
                  <tr>
                    <TableData colSpan="5">name: {dimension.name}</TableData>
                  </tr>
                  <tr>
                    <TableData colSpan="5">
                      {dimension.material && `material: ${dimension.material}`}
                    </TableData>
                  </tr>
                </tbody>
              </Table>
            </SwipeToDeleteItem>
          </li>
        ))}
      </StyledList>
    </>
  );
}

const Table = styled.table`
  width: 100%;
  background-color: var(--color-background);
  padding: 0.7em 0;
  text-align: center;
  border-top: 0.05em solid black;
`;

const StyledList = styled.ul`
  gap: 0.5em;
  list-style: none;
  padding: 0;
  background-color: white;
`;

const TableHeading = styled.th`
  width: 25%;
`;

const TableData = styled.td`
  text-align: start;
`;
