import './App.css';
import Table from '@material-ui/core/Table'
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : 'SungChul',
  'birthday' : '123456',
  'gender' : 'Male',
  'job' : 'Web Developer'
},{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : 'Matthew',
  'birthday' : '456789',
  'gender' : 'Male',
  'job' : 'Dental Technician'

},{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : 'Hong',
  'birthday' : '123789',
  'gender' : 'Male',
  'job' : 'Student'

}]

function App() { 
  return (
    <Paper >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => {
            return (<Customer 
              key={c.id}
              id={c.id}
              image= {c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />)
          })}
        </TableBody>
      </Table>
     
    </Paper>
  );
}

export default App;
