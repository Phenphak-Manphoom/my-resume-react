import React from "react";
import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Full Stack Developer</td>
          <td>Full Stack Developer</td>
          <td>Tech up</td>
          <td>2022-Present</td>
        </tr>
        <tr>
          <td>BBA</td>
          <td>General Management</td>
          <td>Ramkhamheang University</td>
          <td>2005-2008</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
