import React from 'react'


function Summary() {
    return (
        <div>
            <main id="main" className="main">
                <section className="section" style={{ minHeight: "480px" }}>
                    <div class="row">
                        <div className="col-lg-6 col-md-6 col-6 text-start  ">
                            <h4>Summary</h4>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 text-end">
                            <a href="#">
                                <i className="bi bi-house-fill"></i>
                                Home </a> /Summary
                        </div>
                        <form >
                            <div className="row py-3 mb-5">

                                <div className="col-lg-4">
                                    <div className="mb-3">
                                        <select className="form-select" aria-label="Defalt select example">
                                            <option defaultvalue="Internal">Select Project</option>
                                            <option value="External">External</option>
                                            <option value="StaffAug">StaffAug</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="mb-3">
                                        <select className="form-select" aria-label="Defalt select example" style={{ width: "150px" }}>
                                            <option defaultvalue="Internal">2022</option>
                                            <option value="External">2023</option>
                                            <option value="StaffAug">2024</option>
                                            <option value="Others">2025</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="mb-3">
                                        <select className="form-select" aria-label="Defalt select example" style={{ width: "150px" }}>
                                            <option defaultvalue="Internal">Jan</option>
                                            <option value="External">Feb</option>
                                            <option value="StaffAug">Mar</option>
                                            <option value="Others">Apr</option>
                                            <option value="Others">May</option>
                                            <option value="Others">Jun</option>
                                            <option value="Others">Jul</option>
                                            <option value="Others">Aug</option>
                                            <option value="Others">Sep</option>
                                            <option value="Others">Oct</option>
                                            <option value="Others">Nov</option>
                                            <option value="Others">Dec</option>


                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-2" >
                                    <div className="mb-3">
                                        <button className='btn btn-primary' style={{ width: "200px" }}>Submit</button>
                                    </div>

                                </div>



                            </div>
                        </form>
                    </div>
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <input type="Search" className="form-control" placeholder="search" required autoComplete="off" style={{ width: "200px" }} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 text-end">
                                        <button type="button" class=" me-md-2 btn btn-outline-secondary">Copy</button>
                                        <button type="button" class="btn btn-outline-secondary me-md-2 ">CSV</button>
                                        <button type="button" class="btn btn-outline-secondary me-md-2">Excel</button>
                                        <button type="button" class="btn btn-outline-secondary me-md-2">PDF</button>
                                        <button type="button" class="btn btn-outline-secondary me-md-2">Print</button>
                                        show<select>
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                        Entries
                                    </div>

                                </div>

                                <div class="row">
                                    <div>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        Sl.No</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Eligible Hrs</th>
                                                    <th scope="col">	Billable Hrs</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>
                                    

                                </div>
                                No data available
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Summary
