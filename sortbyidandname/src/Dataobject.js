import React, { useState } from "react";
function Dataobject() {
  const [data, setdata] = useState([
    {
      name: "allen solly",
      size: "M",
      color: "red",
    },
    {
      name: "pep",
      size: "S",
      color: "blue",
    },
    {
      name: "black berry",
      size: "L",
      color: "yellow",
    },
  ]);
  const [arr, setarr] = useState([]);
  const getdata = (e, ind, arg) => {
    console.log(e.target.value, ind);
    if (arg == "name") {
      data.map((ele, index) => {
        if (ele.name == e.target.value && ind == index) {
          ele["namecount"] = (ele["namecount"] || 0) + 1;
          console.log(ele, "ell");
          if (arr.indexOf(ele) == -1) {
            arr.push(ele);
            setarr([...arr]);
          }
        }
        setdata([...data]);
      });
    } else if (arg == "size") {
      data.map((ele, index) => {
        if (ele.name == e.target.value && ind == index) {
          ele["sizecount"] = (ele["sizecount"] || 0) + 1;

          console.log(ele, "ell");
          if (arr.indexOf(ele) == -1) {
            arr.push(ele);
            setarr([...arr]);
          }
        }
        setdata([...data]);
      });
    } else if (arg == "color") {
      data.map((ele, index) => {
        if (ele.name == e.target.value && ind == index) {
          ele["colorcount"] = (ele["colorcount"] || 0) + 1;
          console.log(ele, "ell");
          if (arr.indexOf(ele) == -1) {
            arr.push(ele);
            setarr([...arr]);
          }
        }
        setdata([...data]);
      });
    }
  };
  console.log(data);
  console.log(arr, "venkat");
  return (
    <div>
      {" "}
      {data.map((ele, index) => (
        <div>
          {" "}
          <input
            type="checkbox"
            value={ele.name}
            onChange={(e) => {
              getdata(e, index, "name");
            }}
          />
          {ele.name}
          <input
            type="checkbox"
            value={ele.name}
            onChange={(e) => {
              getdata(e, index, "size");
            }}
          />
          {ele.size}
          <input
            type="checkbox"
            value={ele.name}
            onChange={(e) => {
              getdata(e, index, "color");
            }}
          />
          {ele.color}
        </div>
      ))}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>BrandName</th> <th>age</th> <th>color</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {arr &&
            arr.map((ele) =>
              (ele.namecount && ele.namecount % 2 !== 0) ||
              (ele.sizecount && ele.sizecount % 2 !== 0) ||
              (ele.colorcount && ele.colorcount % 2 !== 0) ? (
                <div>
                  {" "}
                  <tr>
                    {" "}
                    <td>{ele.name}</td> <td>{ele.size}</td> <td>{ele.color}</td>{" "}
                  </tr>{" "}
                </div>
              ) : null
            )}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
}
export default Dataobject;
