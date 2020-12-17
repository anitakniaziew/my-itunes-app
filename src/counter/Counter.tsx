import { Button, Stack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCount, incrementCount, selectCount } from './counterSlice'

function Counter () {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
  <Stack>
    <div>{count}</div>
    <Button onClick={() => dispatch(incrementCount(7))} colorScheme='green'>+</Button>
    <Button onClick={() => dispatch(decrementCount(3))} colorScheme='red'>-</Button>
  </Stack>
  )
}


export default Counter;
