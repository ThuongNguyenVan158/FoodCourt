import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchFood() {
  return (
            <Paper
                component="form"
                sx={{ height: '55px', marginTop: '5px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Tên sản phẩm"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
    );
 }