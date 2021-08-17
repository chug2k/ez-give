import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { Box } from '@chakra-ui/react';

import React from 'react';

function HomePageSlider({ handleChange }) {
  return (
    <Slider
      defaultValue={400}
      min={200}
      max={5000}
      step={200}
      colorScheme={'whatsapp'}
      onChange={val => handleChange(val)}
    >
      <SliderTrack>
        <Box position="relative" right={10} />
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
}

export default HomePageSlider;
