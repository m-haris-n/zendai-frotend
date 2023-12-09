import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Box, Button, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const nav = useNavigate();

  return (
    <>
      <Welcome />
      {/* <ColorSchemeToggle /> */}
      <Flex dir={'row'} gap={16} w={'100%'} justify={'center'} align={'center'}>
        <Button size={'lg'} onClick={() => nav('/auth', { state: { auth_type: 'register' } })}>
          Register
        </Button>
        <Button
          size={'lg'}
          variant={'white'}
          onClick={() => nav('/auth', { state: { auth_type: 'login' } })}
        >
          Login
        </Button>
      </Flex>
    </>
  );
}
