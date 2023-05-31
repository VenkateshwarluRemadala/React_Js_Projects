import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { DownloadTableExcel } from "react-export-table-to-excel";
import CopyToClipboard from "react-copy-to-clipboard";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CsvDownloader from "react-csv-downloader";
// import { Document } from "react-pdf";
import { CSVLink } from "react-csv";
function DailyStatusReport() {
  const { quill, quillRef } = useQuill();
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [empName, setEmpName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [dsrDate, setDsrDate] = useState("");
  const [hrs, setHrs] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [copyText, setCopyText] = useState("");
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postsperpage, setpostsperpage] = useState(10);
  const totalpages = Math.ceil(info.length / postsperpage);
  const pages = [...Array(totalpages + 1).keys()].slice(1);
  const indexofLastpage = currentpage * postsperpage;
  const indexofFirstPage = indexofLastpage - postsperpage;

  const handleClose = () => setShow(false);
  const prevhandle = () => {
    if (currentpage !== 1) {
      setcurrentpage(currentpage - 1);
    }
  };
  const nexthandle = () => {
    if (currentpage !== totalpages) {
      setcurrentpage(currentpage + 1);
    }
  };

  const tableRef = useRef(null);
  const filtered = !search
    ? info
    : info.filter((person) => {
        return (
          person.empName.toLowerCase().includes(search.toLowerCase()) ||
          person.project.toLowerCase().includes(search.toLowerCase()) ||
          person.hrsWorked.toLowerCase().includes(search.toLowerCase()) ||
          person.dSRReport.toLowerCase().includes(search.toLowerCase())
        );
      });
  const getTable = () => {};

  const handleSubmit = () => {
    setShow(true);
    const obj = {
      empName: empName,
      projectName: projectName,
      dsrDate: dsrDate,
      hrs: hrs,
      taskDescription: taskDescription,
    };
    console.log(obj);
    axios
      .post("http://192.168.3.156:8888/dailystatus/addDSR", obj)
      .then((resp) => {
        setInfo(resp.data);

        axios
          .get("http://192.168.3.156:8888/dailystatus/fetchdsr")
          .then((resp) => {
            if(resp.status == 200){
               console.log(msg, "venkatesh");
            }
            setInfo(resp.data);
            // console.log(Object.keys(resp.data[0]));
            // setHeaders()
          });
      });
    setEmpName("");
    setProjectName("");
    setDsrDate("");
    setHrs("");
    setTaskDescription("");
  };
  console.log(dsrDate, "iam dsrdate");
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        let val = quillRef.current.firstChild.innerHTML;
        val = val.split("<p>").join("").split("</p>").join("");
        console.log(val);
        // console.log(quillRef.getText())

        setTaskDescription(val);
      });
    }
  }, [quill]);

  const csvReport = {
    data: filtered,
    headers: [
      { label: "Employee Name", key: "empName" },
      { label: "Project Name", key: "project" },
      { label: "Hours Worked", key: "hrsWorked" },
      { label: "task Description", key: "dSRReport" },
    ],
    filename: "DSR-Report.csv",
  };

  useEffect(() => {
    axios.get("http://192.168.3.156:8888/dailystatus/fetchdsr").then((resp) => {
      setInfo(resp.data);
      // console.log(Object.keys(resp.data[0]));
      // setHeaders()
    });
    axios
      .get(`http://192.168.3.156:8888/dailystatus/getProjects`)
      .then((resp) => setProjectNameget(resp.data));
  }, []);
  console.log(info);
  const val = useSelector((state) => state.display.api);
  console.log(val, "iam 22");
  const [api, setApi] = useState(val);
  const [projectNamesget, setProjectNameget] = useState([]);
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [
      ["EmployeeName", "ProjectName", "Houers-Worked", "Task-Description"],
    ];
    const data = filtered.map((elt) => [
      elt.empName,
      elt.project,
      elt.hrsWorked,
      elt.dSRReport,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // btnCopyTable.addEventListener('click', () => copyEl(elTable));
  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <div>
      {" "}
      <main id="main" className="">
        <section className="col-md-12" style={{ minHeight: "480px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h4>Daily Status Reports(DSR)</h4>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-3">
                <div className="mb-2">
                  <input
                    type="/^[A-Za-z\s]*$/"
                    className="form-control"
                    placeholder="Employee name"
                    required
                    autoComplete="off"
                    value={empName}
                    onChange={(e) => setEmpName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-2">
                  <select
                    className="form-select"
                    aria-label="Defalt select example"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  >
                    <option>Select Project</option>
                    {projectNamesget.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-2">
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="mb-2">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date"
                    required
                    autoComplete="off"
                    value={dsrDate}
                    onChange={(e) => setDsrDate(e.target.value)}
                  />{" "}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-2">
                  <label className="form-label">Hours Worked</label>
                  <input
                    type="/^[A-Za-z\s]*$/"
                    className="form-control"
                    placeholder="eg:04:10"
                    required
                    autoComplete="off"
                    value={hrs}
                    onChange={(e) => setHrs(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className=" form-group">
                  <div className="desc">Task Description</div>
                  <div className="quill-editor-default">
                    <div>
                      <div>
                        <div ref={quillRef} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row py-5">
            <div className="col-md-12">
              <div class="card mb-2">
                <div class="card-body">
                  <form>
                    <div className="row py-3 mb-5">
                      <div className="col-lg-6">
                        <div className="mb-2">
                          <input
                            type="Search"
                            className="form-control"
                            placeholder="search"
                            required
                            autoComplete="off"
                            value={search}
                            onChange={handleSearch}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4" style={{ textAlign: "right" }}>
                        <CSVLink {...csvReport}>
                          <button
                            type="button"
                            class="btn btn-outline-secondary me-md-2 "
                          >
                            CSV
                          </button>
                        </CSVLink>
                        <button
                          type="button"
                          class="btn btn-outline-secondary me-md-2"
                        >
                          Excel
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary me-md-2"
                        >
                          PDF
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary me-md-2"
                        >
                          Print
                        </button>
                      </div>
                      <div class="col-lg-2">
                        Show
                        <select
                          className="btn btn-outline-secondary"
                          aria-label="Default select example"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                        Entries
                      </div>
                      <div id="printablediv">
                        <table class="table" ref={tableRef}>
                          <thead>
                            <tr
                              class="table-primary"
                              style={{ textAlign: "left" }}
                            >
                              <th scope="col" style={{ width: "120px" }}>
                                EmployeeName
                              </th>
                              <th scope="col" style={{ width: "120px" }}>
                                ProjectName
                              </th>
                              <th scope="col" style={{ width: "120px" }}>
                                Hours
                              </th>
                              <th scope="col" style={{ width: "120px" }}>
                                TaskDescription
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {filtered.map((e, i) => (
                              <tr
                                key={i}
                                style={{
                                  textAlign: "left",
                                  wordWrap: "break-word",
                                }}
                              >
                                <td scope="row">{e.empName}</td>
                                <td>{e.project}</td>
                                <td>{e.hrsWorked}</td>
                                <td>{e.dSRReport}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <hr class="mt-4 mb-4" />
                        <div className="col-lg-2">
                          <div className="mb-2">
                            <nav
                              aria-label="..."
                              style={{ paddingBottom: "120px" }}
                            >
                              <ul className="pagination">
                                <li className="page-item ">
                                  <span
                                    className="page-link"
                                    style={{ cursor: "pointer" }}
                                    onClick={prevhandle}
                                  >
                                    Previous
                                  </span>
                                </li>
                                {pages.map((e, i) => (
                                  <li className="page-item">
                                    <a
                                      className="page-link"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => setcurrentpage(e)}
                                    >{` ${e}`}</a>
                                  </li>
                                ))}
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    style={{ cursor: "pointer" }}
                                    onClick={nexthandle}
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="card-footer  text-end">
                    <a href="#">View all</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Modal show={show}>
              <Modal.Body>Submitted Successfully</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DailyStatusReport;
