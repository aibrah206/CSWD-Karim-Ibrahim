import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import ButtonC from './components/ButtonC'
import './App.css';
import { Home, Trips, Rooms } from './components'
const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary:{
      main:"#a1d8ff"
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4:{
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem'
    },
    h5:{
      fontWeight: 100,
      lineHeight: '2rem'
    },
  },
})
function App() {
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
      <ButtonC/>
       </ThemeProvider>
       <Home/>
       <Trips/>
       <Rooms/>
    </div>
  );
}

export default App;
