import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  return (
    
    <Box sx={{ flexGrow: 1,marginBottom:'10rem'}}>
      
      <AppBar position="fixed" sx={{backgroundColor:'#F5F5F5',color:'#000'}}>
        <Toolbar sx={{gap:2}}>
          
          <Typography
            variant="h4"
            flexWrap='wrap'
            component={Link}
            to='/'
            sx={{ color:'black',flexGrow: 0, display: { sm: 'block' },fontWeight:'900', letterSpacing:'3px',textDecoration:'none'}}
        >
            O<span className='L'>l</span>x
          </Typography>
          
          <FormControl variant="filled" 
          sx={{ m: 1, minWidth: 100,border:'2px solid black',width:'20%'}}>
          <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
          <Select sx={{backgroundColor:'white'}}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Age"
          >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value="Pakistan">
                <em>Pakistan</em>
            </MenuItem>
          </Select>
        </FormControl>
          
          <Search 
            sx={{ flexGrow:2, display: { xs: 'block' }, color:'#000',border:"2px solid black",
                backgroundColor:'white'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

            <Button sx={{color:'black',textDecoration:'underline',fontSize:'1rem',fontWeight:"bold"}}>Login</Button>        

        </Toolbar>
      </AppBar>
    </Box>
  );
}