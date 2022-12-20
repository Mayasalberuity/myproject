import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { filesService } from '../services/files.service';
import moment from 'moment/moment';

const Filehistory = () => {
  const [filesHistory, setFilesHistory] = useState([]);
  useEffect(()=>{
    filesService.getFilesHistory({group_id: 6, file_id: 1})?.then(res => setFilesHistory(res?.file_history?.data || []))
  },[]);

  return (

    <>
      <div className="container-app">
        <h2 className='filehis'> {filesHistory?.[0]?.file_name} History</h2>
        <form className='form-data'>
          <table className='table'>
            <thead>
              <tr>
                <th className='th'>UserName </th>
                <th className='th'>booking Date</th>
                <th className='th'> Modification Date</th>
                <th className='th'> Download Date</th>
                <th className='th'> cancel Reservation</th>
              </tr>
            </thead>
            <tbody>
              { 
                filesHistory?.map(row => <tr key={row.file_id}>
                  <td>{row?.["name "]}</td>
                  <td>{row.reservation_date ? moment(row.reservation_date).format('DD/MM/YYYY') : ""}</td>
                  <td>{row.modification_date ? moment(row.modification_date).format('DD/MM/YYYY') : ""}</td>
                  <td>{row.upload_date ? moment(row.upload_date).format('DD/MM/YYYY') : ""}</td>
                  <td>{row.reservation_cancellation_date ? moment(row.reservation_cancellation_date).format('DD/MM/YYYY') : ''}</td>
                </tr>)
              }
              
            </tbody>

          </table>
        </form>

      </div>
    </>
  );




};

export default Filehistory;
