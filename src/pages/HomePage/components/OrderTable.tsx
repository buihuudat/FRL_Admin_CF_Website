import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import { formattedAmount } from "../../../utils/handlers/formatMoney";

interface OrderTableProps {
  id: string;
  time: string;
  image: string;
  name: string;
  price: number;
  category: string;
  sold?: number;
  unit: string;
  quantity?: number;
  status?: boolean;
  view: number;
}

const OrderTable = ({ data }: { data: OrderTableProps[] }) => (
  <Card>
    <Title>Top những sản phẩm bán chạy</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          {/* <TableHeaderCell>Thời gian</TableHeaderCell> */}
          <TableHeaderCell>STT</TableHeaderCell>
          <TableHeaderCell>Hình ảnh</TableHeaderCell>
          <TableHeaderCell>Tên</TableHeaderCell>
          <TableHeaderCell>Giá</TableHeaderCell>
          <TableHeaderCell>Thể loại</TableHeaderCell>
          {/* <TableHeaderCell>Tồn</TableHeaderCell> */}
          {/* <TableHeaderCell>Số lượng</TableHeaderCell> */}
          <TableHeaderCell>Lượt xem</TableHeaderCell>
          <TableHeaderCell>Đã bán</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody className="max-h-60 overflow-y-auto">
        {data.map((item, index) => (
          <TableRow key={item.id}>
            {/* <TableCell>{item.time}</TableCell> */}
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>
                {formattedAmount(item.price)}/{item.unit}
              </Text>
            </TableCell>
            <TableCell>
              <Text>{item.category}</Text>
            </TableCell>
            {/* <TableCell>{item.quantity}</TableCell> */}
            <TableCell>{item.view}</TableCell>
            <TableCell>{item.sold}</TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default OrderTable;
