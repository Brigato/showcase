import { useEffect, useState } from 'react';

import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import './Timer.css';

export default function Timer({ time }) {
  const [minute, setminute] = useState(time);
  const [second, setsecond] = useState(0);
  const [running, setRunning] = useState(false);
  const [blink, setBlink] = useState(false);
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        if (minute === 0 && second === 0) {
          timerEnd();
          setminute(time);
          setRunning(false);
        } else if (second === 0) {
          setminute(minute - 1);
          setsecond(59);
        } else {
          setsecond(second - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running, minute, second, time]);

  function startStop() {
    setRunning(!running);
  }

  function resetTimer() {
    setminute(time);
    setsecond(0);
    setRunning(false);
  }

  function timerEnd() {
    setBlink(true);
    setTimeout(function () {
      setBlink(false);
    }, 5000);
  }

  return (
    <Card sx={{ minWidth: 400, p: 2, textAlign: 'center' }}>
      <CardContent>
        <Typography className={blink ? 'blink' : ''} variant='h1' gutterBottom>
          {minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Box sx={{ width: 200 }}>
          <Button onClick={startStop} variant='contained'>
            {running ? 'Stop' : 'Start'}
          </Button>
          <Button onClick={resetTimer} variant='contained'>
            Reset
          </Button>
          <Stack spacing={2} direction='row' sx={{ mt: 3 }} alignItems='center'>
            <VolumeDown />
            <Slider aria-label='Volume' value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
}
