import { Box, Button, Flex, Group, Paper, TextInput, Textarea } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import React from 'react';

export default function ChatArea() {
  return (
    <Flex
      direction={'column'}
      w={'100%'}
      h={'calc(100vh - 100px)'}
      justify={'space-between'}
      gap={16}
    >
      <Paper h={'100%'} w={'100%'}></Paper>
      <Flex w={'100%'} direction={'row'} justify={'space-between'} align={'end'} gap={16}>
        <Textarea size={'lg'} w={'100%'} rows={1} maxRows={6} autosize />
        <Button size={'lg'}>
          <IconSend />
        </Button>
      </Flex>
    </Flex>
  );
}
