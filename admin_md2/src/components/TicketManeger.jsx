import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import Pagination from "./Pagination";
function TicketManeger() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(2);
  const [editMode, setEditMode] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/bookedTickets`)
      .then((response) => setTickets(response.data));
  }, []);
  const handleStatus = (id) => {
    axios.patch(`http://localhost:8000/bookedTickets/${id}`, { status: true });
    window.location.reload();
  };
  // Lấy movies hiện tại dựa trên trang hiện tại
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentTickets = tickets.slice(indexOfFirstMovie, indexOfLastMovie);

  // Chuyển đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [show, setShow] = useState(false);
  return (
    <div>
      <SideBar />

      <br />
      <br />
      <h1>QUẢN LÝ VÉ</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên phim</th>
            <th>Rạp</th>
            <th>Ngày</th>
            <th>Giờ</th>
            <th>Ghế</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map((ticket, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{ticket.movie}</td>
              <td>{ticket.theater}</td>
              <td>{ticket.date}</td>
              <td>{ticket.time}</td>
              <td>{ticket.seat.toString()}</td>
              <td>{ticket.status ? "Đã xác nhận" : "Chờ xác nhận"}</td>
              <td>
                <Button onClick={() => handleStatus(ticket.id)}>
                  Xác nhận
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={tickets.length}
        paginate={paginate}
      />
    </div>
  );
}

export default TicketManeger;
