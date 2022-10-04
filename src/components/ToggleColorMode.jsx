import {Button,useColorModeValue} from '@chakra-ui/react';
import {useColorMode} from '@chakra-ui/color-mode';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';

export const ToggleColorMode = () => {
  const {colorMode, toggleColorMode} = useColorMode ();

  return (
    <Button color={useColorModeValue('white','gold')} onClick={() => toggleColorMode ()} border={0} colorScheme='transparent'> 

      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}

    </Button>
  );
};
