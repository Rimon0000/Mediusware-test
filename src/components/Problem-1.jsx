import React, {useState} from 'react';

const Problem1 = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [tableData, setTableData] = useState([]);

    const [show, setShow] = useState('all');

    //get category value
    const handleClick = (val) =>{
        setShow(val);
    }

    //handle submit
    const handleSubmit = (event) =>{
        event.preventDefault()
        const newData = { name, status };
        console.log(newData)

        setTableData([...tableData, newData]);
        setName('');
        setStatus('');
    }

    
    // Filtering data by category
    const filteredData = tableData.filter((data) => {
      if (show === 'all'){
        return true;
      } 
      else if (show === 'active') {
        return data.status === 'active';
      }
      else if (show === 'completed'){
         return data.status === 'completed';
      }
      else{
        return false;
      }

    });

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.map((data, index) => (
                          <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.status}</td>
                          </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;