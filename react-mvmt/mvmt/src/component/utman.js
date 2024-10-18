import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Utman() {
  return (
    <div className="container-fluid p-4" style={{backgroundColor:'rgba(242,235,229)'}}>
      <Link to='/adminmanage'>
      <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Dashboard</Button>
      </Link>
        <h3 style={{justifyContent:'center',display:'flex',fontFamily:'monospace',fontWeight:'bold'}}>Utility Management</h3>
      <Table striped bordered hover style={{border:'1px solid black', marginTop:'40px'}}>
        <thead  style={{backgroundColor:'rgba(121,104,91,1)'}}>
          <tr>
            <th style={{color:'white'}}>S.No</th>
            <th style={{color:'white'}}>CATEGORY</th>
            <th style={{color:'white'}}>SUB CATEGORY</th>
            <th style={{color:'white'}}>GENDER</th>
            <th style={{color:'white'}}>EDIT</th>
            <th style={{color:'white'}}>DELETE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>WATCH</td>
            <td>WRIST WATCH</td>
            <td>WOMENS</td>
            <td>
                <Link to='/utmanfrm'><Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Edit</Button>{' '}</Link>
              
            </td>
            <td>
            <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>BRACELET</td>
            <td>METAL</td>
            <td>UNISEX</td>
            <td>
            <Link to='/utmanfrm'><Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Edit</Button>{' '}</Link>
            </td>
            <td>
            <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>GIFTING</td>
            <td>STEEL + GOLD</td>
            <td>COUPLE WATCH</td>
            <td>
            <Link to='/utmanfrm'><Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Edit</Button>{' '}</Link>
            </td>
            <td>
            <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>BRACELET</td>
            <td>METAL</td>
            <td>UNISEX</td>
            <td>
            <Link to='/utmanfrm'><Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Edit</Button>{' '}</Link>
            </td>
            <td>
            <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>WATCH</td>
            <td>WRIST WATCH</td>
            <td>WOMENS</td>
            <td>
            <Link to='/utmanfrm'><Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Edit</Button>{' '}</Link>
            </td>
            <td>
            <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>BRACELET</td>
            <td>METAL</td>
            <td>UNISEX</td>
            <td>
            <Link to='/utmanfrm'><Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Edit</Button>{' '}</Link>
            </td>
            <td>
            <Button style={{backgroundColor:'rgba(121,104,91,1)', border:'rgba(121,104,91,1)',color:'white'}}>Delete</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
      {/* <Link to='/adminmanage'> <Button style={{backgroundColor:'rgba(121,104,91,1)'}}>Submit</Button></Link> */}
     <div className="container-fluid" style={{backgroundColor:'rgba(242,235,229,1)',height:'50rem'}}></div>
    </div>
  );
}

export default Utman;
