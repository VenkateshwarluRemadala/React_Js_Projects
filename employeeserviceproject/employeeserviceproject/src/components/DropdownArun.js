import React, { useState, useEffect } from "react";
import  "antd/dist/antd.css"
import { Select, Row, Col } from "antd";
import axios from "axios";
const { Option } = Select;
const AvailabilityReports = () => {
    // const [apidata,setapidata]=useState([])
    const [org, setorg] = useState("Search to Select")
    const [platformshow, setplatformshow] = useState([])
    const [platformdata, setplatformdata] = useState("Search to Select")
    let data =
    {
        "organization_1": [
            "Platform-1",
            "Platform-2",
            "Platform-3",
            "Platform-4"
        ],
        "organization_2": [
            "Platform-2.1",
            "Platform-2.2",
            "Platform-2.3",
            "Platform-2.4"
        ],
        "organization_3": [
            "Platform-3.1",
            "Platform-3.2",
            "Platform-3.3",
            "Platform-3.4"
        ],
        "organization_4": [
            "Platform-4.1",
            "Platform-4.2",
            "Platform-4.3",
            "Platform-4.4"
        ]
    }
    let orgnames = Object.keys(data)
    const handleorg = (value) => {
        setorg(value)
    }
    const handleplatform = (value) => {
        setplatformdata(value)
    }
    useEffect(() => {
        setplatformshow(data[org])
        // console.log("teja");
    }, [org])
    useEffect(() => {
        let apisenddata = { "organization": org, "platform": platformdata }
        console.log(apisenddata);
        axios.post(`https://m6yuvlc9uk.execute-api.us-east-2.amazonaws.com/dev/organization_reports`,
        apisenddata,
        { headers: { Authorization: window.localStorage.getItem("token"), "Content-Type": "application/json" }},
        ).then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err, "error");
            });
    }, [platformdata])
    return (
        <>
            <Row>
                <Col>
                    <div>
                        <h3>Organization</h3>
                    </div>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        onChange={handleorg}
                    >{orgnames.map((data, index) => (<Option key={index} value={data} >{data}</Option>))}
                    </Select>
                </Col>
                &nbsp;
                <Col>
                    <div>
                        <h3>Platform</h3>
                    </div>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        onChange={handleplatform}
                    >
                        {platformshow && platformshow.map((data, index) => (<Option key={index} value={data}>{data}</Option>))
                        }
                    </Select>
                </Col>
                &nbsp;
                <Col>
                    <div>
                        <h3>AvailabilityReports</h3>
                    </div>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children
                                .toLowerCase()
                                .localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="1">TCS</Option>
                        <Option value="2">IBM</Option>
                        <Option value="3">Yash Technologies</Option>
                        <Option value="4">Aspire Prod </Option>
                        <Option value="5">Axians Prod</Option>
                        <Option value="6">Ameriprise Prod</Option>
                    </Select>
                </Col>
                &nbsp;
                <Col>
                    <button style={{ marginTop: 35 }} type="button" class="btn btn-primary">Download</button>
                </Col>
            </Row>
        </>
    );
};
export default AvailabilityReports;