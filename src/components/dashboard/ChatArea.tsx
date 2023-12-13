import { sendMsg } from '@/api/sendMsg';
import { credModalOpened, hasZenCreds } from '@/atoms';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Group,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import React, { useEffect, useRef, useState } from 'react';

const prevhistory = [
  {
    role: 'user',
    message: 'Hello. How are you?',
  },
  {
    role: 'assistant',
    message:
      'Greetings. I am fine. How are you? Greetings. I am fine. How are you? Greetings. I am  you? Greetings. I am am fine. How are you? Greetings. I am fine. How are you? I am fine. How are you? Greetings. I fine. How are you? Greetings. I am fine. are Greetings. I am fine. How are you? ',
  },
];

export default function ChatArea() {
  const [modalOpened, setModalOpened] = useAtom(credModalOpened);
  const [isZenned, setIsZenned] = useAtom(hasZenCreds);
  const [inputMsg, setInputMsg] = useState('');
  const [history, setHistory] = useState(prevhistory);

  const viewport = useRef<HTMLDivElement>(null);
  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleSendMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setHistory([...history, { role: 'user', message: inputMsg }]);
    setInputMsg('');
    sendMsg(inputMsg, history).then((res) => {
      const ans = res.data.openai;
      setHistory([...history, ...ans.message]);
    });
  };

  const open = () => {
    setModalOpened(true);
  };

  // console.log(history);
  const chat = history.map((msg) => {
    return (
      <Box
        key={history.indexOf(msg)}
        px={'md'}
        bg={msg.role === 'user' ? '' : ''}
        className={'rounded-md'}
      >
        <Flex direction={'row'} align={'start'}>
          <Avatar size={48} m={'md'} color={msg.role === 'user' ? 'green' : 'blue'} />
          <Text size={'lg'} my={'lg'} pt={'3'}>
            {msg.message}
          </Text>
        </Flex>
      </Box>
    );
  });

  return (
    <Flex
      direction={'column'}
      w={'100%'}
      h={'calc(100vh - 100px)'}
      justify={'space-between'}
      gap={16}
    >
      <ScrollArea viewportRef={viewport} scrollbarSize={8}>
        <Paper h={'100%'} w={'100%'}>
          {/* <div className={'flex justify-center items-center h-full w-full '}>
          <Title order={1} display={isZenned ? 'none' : ''}>
            You can't use the app without adding your{' '}
            <Title component={'a'} className={' hover:cursor-pointer underline'} onClick={open}>
              zendesk credentials.
            </Title>
          </Title>
        </div> */}
          {chat}
        </Paper>
      </ScrollArea>
      <Flex w={'100%'} direction={'row'} justify={'space-between'} align={'end'} gap={16}>
        <Textarea
          value={inputMsg}
          onChange={(e) => setInputMsg(e.currentTarget.value)}
          size={'lg'}
          w={'100%'}
          rows={1}
          maxRows={6}
          autosize
        />
        <Button
          type={'submit'}
          size={'lg'}
          onClick={() => handleSendMsg}

          // disabled={!isZenned}
        >
          <IconSend />
        </Button>
      </Flex>
    </Flex>
  );
}
