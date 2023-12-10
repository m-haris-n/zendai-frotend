import { Anchor, Box, Button, Flex, NavLink, Paper, ScrollArea, Text } from '@mantine/core';
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
        <NavLink label={'Name'} active={true} variant={'filled'} className={'rounded-md'} />
      </Flex>
    </ScrollArea>
  );
}
