import { useDisclosure } from '@mantine/hooks';
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Flex,
  Group,
  Image,
  Modal,
  Skeleton,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import ColorSchemeToggleVariant from '@/components/ColorSchemeToggle/ColorSchemeToggleVariant';
import ChatArea from '@/components/dashboard/ChatArea';
import ChatHistory from '@/components/dashboard/ChatHistory';
import { IconChevronDown, IconUser } from '@tabler/icons-react';
import { IconChevronCompactDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';

export default function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [modalOpened, { open, close }] = useDisclosure(true);
  return (
    <>
      <Modal opened={modalOpened} withCloseButton={false} radius={'md'} onClose={close}>
        <Modal.Header>
          <Title order={3}>Add your Zendesk credentials</Title>
        </Modal.Header>
        <Modal.Body>
          <Text>You can't proceed without adding your Zendesk Credentials!</Text>
          <TextInput label={'Zendesk ID'} my={'sm'} />
          <TextInput label={'Zendesk API Key'} my={'sm'} />
          <Button fullWidth={true} my={'md'}>
            Save
          </Button>
        </Modal.Body>
      </Modal>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Flex
            dir={'row'}
            w={'100%'}
            h="100%"
            align={'center'}
            justify={'space-between'}
            px={'md'}
          >
            <Group h="100%">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Text
                variant="gradient"
                size={'xl'}
                lh={1}
                fw={700}
                gradient={{ from: 'purple', to: 'blue' }}
              >
                ZendAI
              </Text>
            </Group>
            <Flex direction={'row'} gap={16} align={'center'}>
              <ColorSchemeToggleVariant />
              <Button variant={'outline'} color={'#cfcfcf'}>
                3 Queries left
              </Button>
              <Flex
                direction={'row'}
                justify={'start'}
                align={'center'}
                gap={8}
                p={'xs'}
                className={
                  'hover:cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-70 rounded-lg'
                }
              >
                <Avatar src={null} size={'sm'} />
                <Text>UserName</Text>
                <IconChevronDown size={18} />
              </Flex>
            </Flex>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <ChatHistory />
        </AppShell.Navbar>
        <AppShell.Main>
          <ChatArea />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
