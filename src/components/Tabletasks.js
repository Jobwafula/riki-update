import React from 'react'

export default function Tabletasks() {
  return (
    <div className='container'>

        <div>
            <h1> Available tasks</h1>
        </div>
      <table className='table table-bordered table-hover table-responsive'>
        <thead>
            <tr>
                <th>TASKS</th>
                <th>TASK TYPE</th>
                <th>RATE</th>
                <th>TASK WORKLOAD</th>
                
            </tr>
        </thead>    
            <tbody>
                <tr>
                    <td>jobclass1</td>
                    <td>jobclass2</td>
                    <td>jobclass3</td>
                    <td>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div>
                                    <p>Average</p>
                                </div>
                                <button id="apply"><a href="./account.html">Apply Now</a></button>
                        </div>
                    </td>
                </tr>

                 <tr>
                    <td>jobclass1</td>
                    <td>jobclass2</td>
                    <td>jobclass3</td>
                    <td>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div>
                                    <p>Average</p>
                                </div>
                                <button id="apply"><a href="./account.html">Apply Now</a></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>jobclass1</td>
                    <td>jobclass2</td>
                    <td>jobclass3</td>
                    <td>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div>
                                    <p>Average</p>
                                </div>
                                <button id="apply"><a href="./account.html">Apply Now</a></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        
      </table>
    </div>
  )
}
