import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const NotesTable = ({data}) => {
  console.log(data)
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Date</Th>
          <Th>Content</Th>
          <Th>Important</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(info=>(
          <Tr>
            <Td>{info.title}</Td>
            <Td>{new Date(info.date).getDate()}</Td>
            <Td>{info.content}</Td>
            <Td>{info.important? "Must":"Later"}</Td>
            <Td>Delete</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default NotesTable;