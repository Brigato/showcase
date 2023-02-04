import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Timer.css';

export default function Timer({ time }) {
  const [minute, setminute] = useState(time);
  const [second, setsecond] = useState(0);
  const [running, setRunning] = useState(false);
  const [blink, setBlink] = useState(false);

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
        <Button onClick={startStop} variant='contained'>
          {running ? 'Stop' : 'Start'}
        </Button>
        <Button onClick={resetTimer} variant='contained'>
          Reset
        </Button>
      </CardActions>
    </Card>
  );
}
