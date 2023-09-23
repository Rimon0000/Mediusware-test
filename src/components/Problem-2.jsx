import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);

  const [contact, setContact] = useState([])
  const [country, setCountry] = useState([])

  useEffect( () =>{
    fetch('https://contact.mediusware.com/api/contacts/?format=json')
    .then(res => res.json())
    .then(data => setContact(data))
}, [])

useEffect( () =>{
    fetch('https://contact.mediusware.com/api/country-contacts/United%20States/?format=json')
    .then(res => res.json())
    .then(data => setCountry(data))
}, [])

console.log(contact.results)

 

    const openModalA = () => {
        setShowModalA(true);
      };
    
      const openModalB = () => {
        setShowModalB(true);
      };
    
      const closeModalA = () => {
        setShowModalA(false);
      };
    
      const closeModalB = () => {
        setShowModalB(false);
      };

      const toggleOnlyEven = () => {
        setOnlyEven(!onlyEven);
      };
    
    //   const filteredContacts = onlyEven
    //     ? contact.filter((contact) => contact?.results?.country.id % 2 === 0)
    //     : contact;

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" >US Contacts</button>
                </div>

                {/* <!-- Modal 1 --> */}
                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal A</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <button className="btn btn-outline-primary mx-2" onClick={openModalA}>
                         All Contacts
                       </button>
                       <button className="btn btn-outline-primary mx-5" onClick={openModalB}>
                         US Contacts
                       </button>
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                       <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contact?.results?.map((data, index) => (
                          <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.phone}</td>
                            <td>{data.country.name}</td>
                          </tr>
                        ))}
                        </tbody>
                    </table>


                      </div>
                      <div className="modal-footer">
                        <label>
                          <input
                            type="checkbox"
                            checked={onlyEven}
                            onChange={toggleOnlyEven}
                          />
                          Only even
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* <!-- Modal 2--> */}
                 <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal B</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <button className="btn btn-outline-primary mx-2" onClick={openModalA}>
                         All Contacts
                       </button>
                       <button className="btn btn-outline-primary mx-5" onClick={openModalB}>
                         US Contacts
                       </button>
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                       <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {country?.results?.map((data, index) => (
                          <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.phone}</td>
                            <td>{data.country.name}</td>
                          </tr>
                        ))}
                        </tbody>
                    </table>


                      </div>
                      <div className="modal-footer">
                        <label>
                          <input
                            type="checkbox"
                            checked={onlyEven}
                            onChange={toggleOnlyEven}
                          />
                          Only even
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                
            </div>
        </div>
    );
};

export default Problem2;