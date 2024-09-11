import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchData } from '../../../utils/apicall';

export default function AdminEnquiry() {
  const [enquiryData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(currentPage + 1, itemsPerPage);
      setData(result.enquirys);
      setPageCount(result.totalPages);
    };

    getData();
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div>
      <h1 className='text-center'>Enquirys</h1>
      <div className='row'>
        <div className='col-md-11 mx-auto'>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th className=''>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enquiryData && enquiryData.map((item,i) => (
            <tr key={item.id}>
              <td># {i+1}</td>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>{item.isStatus?"Published":"UnPublished"}</td>
              <td className='text-center '>
                <button className='btn btn-warning mx-1 px-2'>Edit</button>
                <button className='btn btn-danger mx-1 px-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
        </div>
      </div>
      
      
    </div>
  );
}
