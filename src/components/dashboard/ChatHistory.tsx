import { Anchor, Box, Button, Flex, Paper, ScrollArea, Text } from '@mantine/core';
import React from 'react';

export default function ChatHistory() {
  return (
    <ScrollArea mah={'calc(100vh - 100px)'}>
      <Flex
        h={'100%'}
        w={'100%'}
        direction={'column'}
        justify={'space-between'}
        align={'start'}
        gap={16}
      >
        <Box
          className={'hover:cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-80 rounded-md'}
          w={'100%'}
          p={'sm'}
        >
          <Text size={'xl'}>This chat</Text>
        </Box>
      </Flex>
    </ScrollArea>
  );
}
