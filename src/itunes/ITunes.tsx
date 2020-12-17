import {
  Box,
  Image,
  Stack,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, selectMovies } from './itunesSlice';

export function ITunes() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Box>
      <Stack direction="row">
        <Input
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
        <Button
          colorScheme="blue"
          onClick={() => dispatch(searchMovies({ searchTerm }))}
        >
          Search
        </Button>
      </Stack>
        {movies.map((movie) => (
          <Box key={movie.trackId} borderWidth="1px" borderRadius="lg" margin="50px" padding="10px">
            <Flex direction="row" justify="space-between">
              <Flex direction="column" textAlign="left">
                <Box>{movie.trackName}</Box>
                {movie.artistName}
              </Flex>
              <Image
                objectFit="cover"
                src={movie.artworkUrl100}
                alt="artwork"
              />
            </Flex>
          </Box>
        ))}
    </Box>
  );
}
