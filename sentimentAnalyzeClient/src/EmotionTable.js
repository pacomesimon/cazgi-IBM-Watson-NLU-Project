import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              Object.entries(this.props.emotions).map(function(mapentry) {
                return (
                    <tr>
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                    </tr>
                    
                        )
                    })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;


                    /* <tr>
                    <td>{mapentry[2]}</td>
                    <td>{mapentry[3]}</td>
                    </tr>
                    <tr>
                    <td>{mapentry[4]}</td>
                    <td>{mapentry[5]}</td>
                    </tr>
                    <tr>
                    <td>{mapentry[6]}</td>
                    <td>{mapentry[7]}</td>
                    </tr>
                    <tr>
                    <td>{mapentry[8]}</td>
                    <td>{mapentry[9]}</td>
                    </tr> */