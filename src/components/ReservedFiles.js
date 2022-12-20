import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { filesService } from '../services/files.service';
import moment from 'moment/moment';

const ReservedFiles = () => {
    const [reservedFiles, setReservedFiles] = useState([]);
    useEffect(()=>{
      filesService.getReservedFiles()?.then(res => setReservedFiles(res?.reserved_files?.data || []))
    },[]);

  return (

    <>
      <div className="container-app">
        <h2 className='filehis'>Reserved Files</h2>
        <form className='form-data'>
          <table className='table'>
            <thead>
              <tr>
                <th className='th'>File name</th>
                <th className='th'>File description</th>
                <th className='th'>Download</th>
              </tr>
            </thead>
            <tbody>
              { 
                reservedFiles?.map(row => <tr key={row.file_id}>
                  <td>{row.name}</td>
                  <td>{row.description}</td>
                  <td>
                    <a href={`http://localhost/internet-applications/public/files/${row.name}`}>Download</a>
                    </td>
                </tr>)
              }
               
            </tbody>

          </table>
        </form>

      </div>
    </>
  );




};

export default ReservedFiles;
