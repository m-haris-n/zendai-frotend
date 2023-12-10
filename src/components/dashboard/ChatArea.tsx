import { credModalOpened, hasZenCreds } from '@/atoms';
import { Box, Button, Flex, Group, Paper, Text, TextInput, Textarea, Title } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import React from 'react';

export default function ChatArea() {
  const [modalOpened, setModalOpened] = useAtom(credModalOpened);
  const [isZenned, setIsZenned] = useAtom(hasZenCreds);

  const open = () => {
    setModalOpened(true);
  };
  return (
    <Flex
      direction={'column'}
      w={'100%'}
      h={'calc(100vh - 100px)'}
      justify={'space-between'}
      gap={16}
    >
      <Paper h={'100%'} w={'100%'}>
        <div className={'flex justify-center items-center h-full w-full '}>
          <Title order={1} display={isZenned ? 'none' : ''}>
            You can't use the app without adding your{' '}
            <Title component={'a'} className={' hover:cursor-pointer underline'} onClick={open}>
              zendesk credentials.
            </Title>
          </Title>
        </div>
      </Paper>
      <Flex w={'100%'} direction={'row'} justify={'space-between'} align={'end'} gap={16}>
        <Textarea size={'lg'} w={'100%'} rows={1} maxRows={6} autosize />
        <Button size={'lg'} disabled={!isZenned}>
          <IconSend />
        </Button>
      </Flex>
    </Flex>
  );
}
